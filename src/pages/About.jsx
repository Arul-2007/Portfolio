// src/pages/About.jsx

import React from 'react';

export default function About() {
  return (
    <div className="ui-card">
      <h1 className="ui-title">About Me</h1>

      <p className="ui-text">
        I am a full-stack developer who loves building interactive user
        experiences. This portfolio is a 3D driving-based experience where my
        Thar drives through the desert to navigate between sections.
      </p>

      <p className="ui-text">
        My focus areas include:
      </p>

      <ul className="ui-list">
        <li>Frontend: React, Three.js, R3F, UI/UX concepts</li>
        <li>Backend: Node.js, Express, MongoDB, Firebase</li>
        <li>3D Experiences: Three.js, GLTF workflows</li>
        <li>API development & cloud integrations</li>
      </ul>
    </div>
  );
}
