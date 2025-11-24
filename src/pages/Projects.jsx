// src/pages/Projects.jsx
import React from "react";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <div className="ui-card">
      <h1 className="ui-title">Projects</h1>

      <div className="project-list">
        {PROJECTS.map((p) => (
          <div className="project-card" key={p.id}>
            <h3 className="project-title">{p.title}</h3>
            <p className="ui-text">{p.desc}</p>
            <a
              href="https://github.com/Arul-2007/E-commerce-website"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>

    
    </div>
  );
}
