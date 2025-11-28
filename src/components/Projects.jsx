// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Stationery E-Commerce Website",
    description:
      "A fully responsive e-commerce website developed for a stationery store with product listings, cart pages, and user-friendly navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Arul-2007/E-commerce-website",
  },
  {
    title: "Flow-Chart Movement Game",
    description:
      "A simple interactive game featuring object navigation through flow-based mechanics, built using React to create an engaging experience.",
    tech: ["React", "JavaScript"],
    link: "https://github.com/Arul-2007/Flow-chart-game",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern and animated portfolio website built to showcase my work, skills, and creative development approach using React.",
    tech: ["React", "JavaScript"],
    link: "https://github.com/Arul-2007/Portfolio",
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
              View Project in GitHub
            </a>
          </article>
        ))} 
      </div>
    </div>
  );
}

export default Projects;
