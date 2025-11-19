import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import HologramHouse from './HologramHouse';
import { useNavigate, useLocation } from 'react-router-dom';

export default function HologramNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation order
  const sequence = ['/', '/projects', '/about', '/contact'];

  // Model mapping per route
  const modelMap = {
    '/': '/models/house.glb',
    '/projects': '/models/laptop.glb',
    '/about': '/models/board.glb',
    '/contact': '/models/phone.glb'
  };

  function goNext() {
    const index = sequence.indexOf(location.pathname);
    const next = sequence[(index + 1) % sequence.length];
    navigate(next);
  }

  const currentModel = modelMap[location.pathname] || modelMap['/'];

  return (
    <div className="holo-wrap">
      <Canvas camera={{ position: [0, 1.2, 4], fov: 55 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense
          fallback={
            <Html center>
              <div className="loading">Loading 3D...</div>
            </Html>
          }
        >
          <HologramHouse modelPath={currentModel} onClick={goNext} />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
