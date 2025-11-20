// src/components/Loader.jsx
// A simple loading overlay that appears until all 3D models are ready.

import React from "react";
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="loader-container">
        <div className="loader-spinner"></div>
        <p className="loader-text">Loading… {Math.floor(progress)}%</p>
      </div>
    </Html>
  );
}
