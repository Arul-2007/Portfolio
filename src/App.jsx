// src/App.jsx
// Main layout that combines Header, 3D Scene, and UI Overlays.

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import UIOverlay from './components/UIOverlay';
import MainScene from './scenes/MainScene';

import './styles.css';

export default function App() {
  return (
    <Router>
      {/* Top Navigation */}
      <Header />

      {/* 3D Scene (background) */}
      <div className="scene-container">
        <MainScene />
      </div>

      {/* UI Overlay (foreground content) */}
      <UIOverlay />

      {/* Router structure (required even if UIOverlay uses useLocation) */}
      <Routes>
        <Route path="/" element={null} />
        <Route path="/about" element={null} />
        <Route path="/projects" element={null} />
        <Route path="/contact" element={null} />
      </Routes>
    </Router>
  );
}
