// src/components/Skills.jsx
import React from "react";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript (ES6+)", level: 88 },
  { name: "HTML & CSS", level: 92 },
  { name: "Responsive Design", level: 85 },
  { name: "Git & GitHub", level: 80 },
];

function Skills() {
  return (
    <div className="section-container">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        Technologies and tools I use to bring ideas to life.
      </p>
      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
