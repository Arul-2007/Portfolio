// src/components/Hero.jsx
import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <p className="hero-tagline">Creative Developer & Problem Solver</p>
        <h1>
          Hi, I&apos;m <span className="hero-name">Your Name</span>
        </h1>
        <p className="hero-description">
          I build interactive, modern web experiences using React and
          JavaScript, combining smooth animations with clean, maintainable
          code.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-orbit">
        <div className="hero-avatar">
          <span>YOU</span>
        </div>
        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2"></div>
        <div className="orbit orbit-3"></div>
      </div>
    </div>
  );
}

export default Hero;
