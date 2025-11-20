// src/components/DesertEnv.jsx
// Loads the desert 3D environment + lighting setup.

import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PROFILE } from '../data/profile';
import * as THREE from 'three';

export default function DesertEnv() {
  const sceneRef = useRef();

  // Load desert environment model
  const desertGLB = useLoader(GLTFLoader, PROFILE.assets.environment);

  // Adjust environment materials
  desertGLB.scene.traverse((child) => {
    if (child.isMesh) {
      child.receiveShadow = true;
      child.castShadow = true;
      child.material.shadowSide = THREE.FrontSide;
      if (child.material) {
        child.material.metalness = 0.2;
        child.material.roughness = 0.9;
      }
    }
  });

  return (
    <group ref={sceneRef} scale={3.2} position={[0, -1, 0]}>
      {/* Imported Desert Model */}
      <primitive object={desertGLB.scene} />

      {/* Ground plane fallback if desert model has no ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial color={'#cfa97a'} />
      </mesh>

      {/* Lighting */}
      <hemisphereLight intensity={0.65} groundColor="#c99048" />

      <directionalLight
        castShadow
        intensity={1.4}
        position={[20, 30, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <ambientLight intensity={0.25} />

    </group>
  );
}
