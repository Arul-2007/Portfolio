import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/projects';

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="card">
        <h2>Projects</h2>

        <div className="project-grid">
          {PROJECTS.map((p) => (
            <article key={p.id} className="project-card">
              <div className="project-media">
                {p.img ? (
                  <img src={p.img} alt={p.title} />
                ) : (
                  <div className="placeholder">Image</div>
                )}
              </div>

              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>

              <a
                className="link"
                href={p.github}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

