// src/components/Hero.jsx
import React from "react";
import Character from "../components/Character";
import ObitoSprite from "../assets/obito/idle.png";
import RinSprite from "../assets/rin/idle.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <p className="hero-tagline">Creative Developer & Problem Solver</p>
        <h1>
          Hi, I&apos;m <span className="hero-name">Your Name</span>
        </h1>
        <p className="hero-description">
         I build dynamic and visually engaging web experiences that feel smooth, intuitive, and modern. Leveraging React and JavaScript as my primary tools, I focus on delivering highly interactive user interfaces supported by scalable, maintainable code structures. My approach combines thoughtful UI design, well-organized development practices, and performance-optimized animations to create products that not only look great but also deliver seamless user interactions. I am committed to transforming creative ideas into functional digital solutions that enhance usability and leave a lasting impression.
        </p>
        <br />
        <br />
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
       {/* Obito Animation */}
      <Character sprite={ObitoSprite} />

      {/* Rin Animation */}
      <Character sprite={RinSprite} />
        </div>
        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2"></div>
        <div className="orbit orbit-3"></div>
      </div>
    </div>
  );
}

export default Hero;
