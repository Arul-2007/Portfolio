// src/components/CameraRig.jsx
// GTA-style third-person follow camera for the Thar car.

import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraRig({ movement }) {
  const { camera } = useThree();
  const targetPosition = useRef(new THREE.Vector3());
  const smoothPosition = useRef(new THREE.Vector3());
  const smoothLook = useRef(new THREE.Vector3());

  useEffect(() => {
    camera.position.set(0, 4, 8); // initial position
    camera.fov = 60;
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame((_, delta) => {
    const car = movement.current.carObject;
    if (!car) return;

    // ===== FOLLOW CAMERA SETTINGS =====
    const distanceBack = 6;     // how far behind the car
    const distanceUp = 3;       // how high above
    const speedZoom = Math.min(Math.abs(movement.current.speed) / 6, 1); // zoom effect

    const behindOffset = new THREE.Vector3(0, distanceUp, distanceBack + speedZoom * 1.4);

    // Rotate camera offset relative to car rotation
    behindOffset.applyAxisAngle(new THREE.Vector3(0, 1, 0), car.rotation.y);

    // Target camera position
    targetPosition.current
      .copy(car.position)
      .add(behindOffset);

    // Smooth follow (damping)
    smoothPosition.current.lerp(targetPosition.current, 4 * delta);

    // Look at the car
    smoothLook.current.lerp(car.position, 6 * delta);

    // Update camera
    camera.position.copy(smoothPosition.current);
    camera.lookAt(smoothLook.current);
  });

  return null;
}
