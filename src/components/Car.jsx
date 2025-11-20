// src/components/Car.jsx
// Loads the Thar model + handles steering, wheel rotation, and movement states.

import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { PROFILE } from '../data/profile';

export default function Car({ position = [0, 0, 0], rotationY = 0, movement }) {
  const group = useRef();
  const wheels = {
    frontLeft: useRef(),
    frontRight: useRef(),
    rearLeft: useRef(),
    rearRight: useRef()
  };

  // --- Load Thar GLB Model ---
  const gltf = useLoader(GLTFLoader, PROFILE.assets.car);

  // Shadow & materials adjustment
  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.shininess = 25;
      }
      if (child.name.toLowerCase().includes("wheel")) {
        // Try to detect wheel objects
        if (child.name.includes("FL")) wheels.frontLeft.current = child;
        if (child.name.includes("FR")) wheels.frontRight.current = child;
        if (child.name.includes("RL")) wheels.rearLeft.current = child;
        if (child.name.includes("RR")) wheels.rearRight.current = child;
      }
    });
  }, [gltf]);

  // === Car Movement Logic ===
  useFrame((_, delta) => {
    if (!group.current) return;
    const car = group.current;

    // Movement data passed from DriveController.jsx
    const { speed, steering } = movement.current;

    // Move forward/backward
    const forwardVector = new THREE.Vector3(0, 0, -1).applyQuaternion(car.quaternion);
    car.position.addScaledVector(forwardVector, speed * delta);

    // Steering (turn left/right)
    car.rotation.y -= steering * delta;

    // Wheel animation
    const wheelRotation = speed * delta * 4.5;
    if (wheels.frontLeft.current) wheels.frontLeft.current.rotation.x -= wheelRotation;
    if (wheels.frontRight.current) wheels.frontRight.current.rotation.x -= wheelRotation;
    if (wheels.rearLeft.current) wheels.rearLeft.current.rotation.x -= wheelRotation;
    if (wheels.rearRight.current) wheels.rearRight.current.rotation.x -= wheelRotation;

    // Front wheels turn visually
    const wheelTurnAngle = steering * 0.45;
    if (wheels.frontLeft.current) wheels.frontLeft.current.rotation.z = wheelTurnAngle;
    if (wheels.frontRight.current) wheels.frontRight.current.rotation.z = wheelTurnAngle;
  });

  return (
    <group ref={group} position={position} rotation={[0, rotationY, 0]} scale={0.6}>
      <primitive object={gltf.scene} />
    </group>
  );
}
