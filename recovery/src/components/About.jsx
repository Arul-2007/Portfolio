// src/components/About.jsx
import React from "react";

function About() {
  return (
    <div className="section-container">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        A short snapshot of who you are and how you work.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
            I am a passionate web developer focused on building rich,
            interactive front-end experiences. I enjoy solving problems,
            learning new technologies, and turning ideas into beautiful
            interfaces.
          </p>
        </div>
        <div className="about-card">
          <h3>What I Do</h3>
          <p>
            My core stack is React, JavaScript, and modern CSS. I care about
            performance, accessibility, and crafting smooth user journeys using
            animations and micro-interactions.
          </p>
        </div>
        <div className="about-card">
          <h3>How I Work</h3>
          <p>
            I approach projects with curiosity, structure, and attention to
            detail. I enjoy collaborating, communicating ideas clearly, and
            iterating quickly based on feedback.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
