// src/scenes/MainScene.jsx
// The main 3D scene: car, desert environment, camera rig, auto-driving triggers.

import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLocation } from 'react-router-dom';

import Car from '../components/Car';
import DesertEnv from '../components/DesertEnv';
import CameraRig from '../components/CameraRig';
import DriveController from '../components/DriveController';
import PageTriggers from '../components/PageTriggers';
import Loader from '../components/Loader';

import { PROFILE } from '../data/profile';
export default function MainScene() {
  const location = useLocation();

  // Movement state shared between Car + DriveController + CameraRig
  const movement = useRef({
    speed: 0,
    steering: 0,
    carObject: null // set after model mounts
  });

  // === AUTO-DRIVE TARGET ===
  const targetRef = useRef(null);

  // Update target when route changes
  useEffect(() => {
    const page = location.pathname;

    // Determine which location coordinates to use
    let loc = PROFILE.locations.home;
    let isHome = false;

    if (page === '/') {
      loc = PROFILE.locations.home;
      isHome = true;
    }
    if (page === '/about') loc = PROFILE.locations.about;
    if (page === '/projects') loc = PROFILE.locations.projects;
    if (page === '/contact') loc = PROFILE.locations.contact;

    // Pass target to auto-drive controller
    targetRef.current = {
      x: loc.x,
      z: loc.z,
      rotationY: loc.rotationY,
      autoDrive: true,
      isHome
    };
  }, [location]);

  return (
   <Canvas
  shadows
  camera={{ fov: 60, position: [0, 4, 8] }}
  style={{ width: '100%', height: '100%' }}
>
  <Suspense fallback={<Loader />}>
    <DesertEnv />

    <Car
      movement={movement}
      position={[PROFILE.locations.home.x, 0, PROFILE.locations.home.z]}
      rotationY={PROFILE.locations.home.rotationY}
    />

    <SetCarRef movement={movement} />

    <CameraRig movement={movement} />

    <DriveController movement={movement} target={targetRef.current} />

    <PageTriggers movement={movement} />
  </Suspense>
</Canvas>

  );
}

// Helper component to store car reference AFTER it loads
function SetCarRef({ movement }) {
  return (
    <group
      ref={(ref) => {
        if (ref && ref.children && ref.children.length > 0) {
          // First child is the car mesh
          movement.current.carObject = ref.children[0];
        }
      }}
    ></group>
  );
}
