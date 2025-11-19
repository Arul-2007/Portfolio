import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Html } from '@react-three/drei';

export default function HologramHouse({ modelPath, onClick }) {
  const ref = useRef();

  // Hook MUST be called unconditionally
  const gltf = useLoader(GLTFLoader, modelPath, (loader) => {
    loader.crossOrigin = 'anonymous';
  });

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.35;
  });

  return (
    <group ref={ref} position={[0, -0.4, 0]} onClick={onClick}>
      {/* Model Loaded */}
      {gltf?.scene ? (
        <primitive
          object={gltf.scene}
          scale={[1.2, 1.2, 1.2]}
          position={[0, -0.2, 0]}
        />
      ) : (
        <>
          {/* Fallback simple hologram house */}
          <mesh position={[0, 0.1, 0]}>
            <boxGeometry args={[1.6, 1, 1.2]} />
            <meshStandardMaterial color={'#7B61FF'} metalness={0.3} roughness={0.3} />
          </mesh>

          <mesh position={[0, 0.8, 0]}>
            <coneGeometry args={[1.2, 0.8, 4]} />
            <meshStandardMaterial color={'#00D2FF'} metalness={0.1} roughness={0.5} />
          </mesh>

          <mesh position={[0, -0.25, 0.61]}>
            <boxGeometry args={[0.4, 0.5, 0.05]} />
            <meshStandardMaterial color={'#001f3f'} />
          </mesh>
        </>
      )}

      <Html center position={[0, -1.2, 0]}>
        <div style={{ color: 'white', fontSize: 12 }}>Click to Navigate</div>
      </Html>
    </group>
  );
}
