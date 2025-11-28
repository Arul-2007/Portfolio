// src/components/Skills.jsx
import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaLightbulb } from "react-icons/fa";

const skillsTimeline = [
  {
    title: "Firestore & MongoDB",
    description: "Connecting websites with backend databases.",
    level: 90,
    icon: <FaDatabase />
  },
  {
    title: "React Development",
    description: "Building interactive websites and UI components.",
    level: 90,
    icon: <FaReact />
  },
  {
    title: "JavaScript",
    description: "Writing modern, clean and modular JavaScript code.",
    level: 88,
    icon: <FaJs />
  },
  {
    title: "HTML & CSS",
    description: "Crafting responsive and accessible UI layouts.",
    level: 92,
    icon: (
      <>
        <FaHtml5 /> <FaCss3Alt />
      </>
    )
  },
  {
    title: "Problem Solving",
    description: "Debugging and optimizing logic efficiently.",
    level: 80,
    icon: <FaLightbulb />
  },
];


function Skills() {
  return (
    <div className="section-container">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        A timeline of my growth in modern web technologies.
      </p>

      <div className="timeline">
        {skillsTimeline.map((skill, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
            <h3 className="skill-title">
  <span className="skill-icon">{skill.icon}</span>
  {skill.title}
</h3>

              <p>{skill.description}</p>

              <div className="timeline-progress">
                <div
                  className="timeline-progress-bar"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}

        <div className="timeline-line"></div>
      </div>
    </div>
  );
}

export default Skills;
