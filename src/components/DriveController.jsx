// src/components/DriveController.jsx
// Handles: user controls + auto-driving + drift + U-turn + speed + steering physics

import React, { useEffect, useRef } from 'react';
import { PROFILE } from '../data/profile';

export default function DriveController({ movement, target }) {
  // movement = ref that Car.jsx uses
  // target = { x, z, rotationY, autoDrive: true/false }

  const keys = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false
  });

  const autoDriveState = useRef({
    active: false,
    drift: false,
    uturn: false
  });

  // =========  USER KEYBOARD CONTROLS  ==========
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'w' || e.key === 'ArrowUp') keys.current.forward = true;
      if (e.key === 's' || e.key === 'ArrowDown') keys.current.backward = true;
      if (e.key === 'a' || e.key === 'ArrowLeft') keys.current.left = true;
      if (e.key === 'd' || e.key === 'ArrowRight') keys.current.right = true;

      // Turning off auto-drive the moment user touches keys
      if (!autoDriveState.current.drift) {
        autoDriveState.current.active = false;
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'w' || e.key === 'ArrowUp') keys.current.forward = false;
      if (e.key === 's' || e.key === 'ArrowDown') keys.current.backward = false;
      if (e.key === 'a' || e.key === 'ArrowLeft') keys.current.left = false;
      if (e.key === 'd' || e.key === 'ArrowRight') keys.current.right = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // =========  AUTO-DRIVE TO PAGE LOCATION ==========

  useEffect(() => {
    if (!target) return;

    if (target.autoDrive) {
      autoDriveState.current.active = true;

      // If navigating HOME → trigger drift + U-turn
      if (target.isHome && movement.current.speed > 2) {
        autoDriveState.current.drift = true;
        autoDriveState.current.uturn = true;

        setTimeout(() => {
          autoDriveState.current.drift = false;
        }, PROFILE.driving.driftDuration * 1000);
      }
    }
  }, [target, movement]);

  // =========  MAIN UPDATE LOOP (runs every frame) ==========

  useEffect(() => {
    let animationFrame;

    const update = () => {
      const drive = PROFILE.driving;

      // -----------------------------
      // USER MANUAL DRIVING CONTROLS
      // -----------------------------
      if (!autoDriveState.current.active) {
        // Accelerate + Brake
        if (keys.current.forward) {
          movement.current.speed += drive.acceleration * 0.02;
        }
        if (keys.current.backward) {
          movement.current.speed -= drive.braking * 0.02;
        }

        // Speed limits
        movement.current.speed = Math.max(
          -drive.maxSpeed / 2,
          Math.min(drive.maxSpeed, movement.current.speed)
        );

        // Steering
        if (keys.current.left) {
          movement.current.steering = drive.steerSpeed;
        } else if (keys.current.right) {
          movement.current.steering = -drive.steerSpeed;
        } else {
          movement.current.steering = 0;
        }
      }

      // -----------------------------
      // AUTO-DRIVE LOGIC
   
      if (autoDriveState.current.active && target) {
        const car = movement.current.carObject;
        if (car) {
          const dx = target.x - car.position.x;
          const dz = target.z - car.position.z;
          const distance = Math.sqrt(dx * dx + dz * dz);

          // Point car toward destination
          const desiredAngle = Math.atan2(dx, dz);
          const angleDiff = desiredAngle - car.rotation.y;

          // Normalize angle
          const normalized = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));

          // Rotate towards target
          movement.current.steering = -normalized * 2.0;

          // Move forward
          movement.current.speed = drive.maxSpeed * 0.8;

          // Stop when close
          if (distance < 1.5) {
            movement.current.speed = 0;
            movement.current.steering = 0;
            autoDriveState.current.active = false;
          }
        }
      }

      // -----------------------------
      // DRIFT / U-TURN LOGIC
      // -----------------------------
      if (autoDriveState.current.drift && movement.current.carObject) {
        movement.current.steering = drive.steerSpeed * 2.2;
        movement.current.speed = drive.uTurnSpeed * 0.8;
      }

      animationFrame = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(animationFrame);
  }, [movement]);

  return null;
}
