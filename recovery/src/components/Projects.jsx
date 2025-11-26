// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Creative Portfolio",
    description:
      "A gradient-themed portfolio built with React, showcasing animations and smooth scrolling.",
    tech: ["React", "CSS", "Vite"],
    link: "#",
  },
  {
    title: "Interactive Dashboard",
    description:
      "A responsive dashboard with charts, filters, and real-time UI updates.",
    tech: ["React", "JavaScript"],
    link: "#",
  },
  {
    title: "Landing Page Experience",
    description:
      "Modern landing page with scroll-based animations and responsive layout.",
    tech: ["HTML", "CSS", "JS"],
    link: "#",
  },
];

function Projects() {
  return (
    <div className="section-container">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        A selection of work that reflects how I think and build.
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
