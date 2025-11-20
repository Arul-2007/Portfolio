// src/components/UIOverlay.jsx
// Displays page UI panels on top of the 3D driving scene.

import React from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

export default function UIOverlay() {
  const location = useLocation();

  return (
    <div className="ui-overlay">
      {location.pathname === '/' && <Home />}
      {location.pathname === '/about' && <About />}
      {location.pathname === '/projects' && <Projects />}
      {location.pathname === '/contact' && <Contact />}
    </div>
  );
}
