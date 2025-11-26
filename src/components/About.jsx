// src/components/About.jsx
import React from "react";

function About() {
  return (
    <div className="section-container">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
       I am Arul, a dedicated Full Stack Developer who enjoys building clean, user-friendly digital experiences. <br /> I combine strong technical skills with a thoughtful and organized workflow. <br />I focus on understanding user needs, crafting efficient solutions, and delivering polished results with consistency and attention to detail. <br />
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
           I am Arul, an enthusiastic Full Stack Developer who enjoys transforming concepts into fully functional digital experiences. I am driven by curiosity and a commitment to continuous learning, always exploring better ways to solve problems through technology.
          </p>
        </div>
        <div className="about-card">
          <h3>What I Do</h3>
          <p>
           I develop responsive and intuitive web applications using modern technologies. My core expertise includes frontend development with React and strong foundations in backend systems. I focus on delivering clean code, structured development practices, and performance-driven solutions that provide real value to users.
          </p>
        </div>
        <div className="about-card">
          <h3>How I Work</h3>
          <p>
           I believe in a collaborative and process-oriented approach. I start by understanding requirements clearly, plan with precision, and execute with attention to detail. I iterate, test, and refine every feature to ensure the final product is reliable, scalable, and aligned with user expectations. Communication, adaptability, and continuous improvement are at the core of my workflow.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
