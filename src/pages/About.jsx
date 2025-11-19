import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="card">
        <h2>About</h2>

        <p className="muted">
          I build web applications with a focus on clean interfaces and performant
          code. I work confidently across the stack—React and Three.js on the
          front-end, and Node/Express or serverless architectures on the backend.
          I pay close attention to design, accessibility, and performance.
        </p>

        <h3>Highlights</h3>
        <ul>
          <li>React + Three.js interactive UI development</li>
          <li>REST & GraphQL API design</li>
          <li>Performance optimization and accessibility</li>
        </ul>
      </div>
    </motion.div>
  );
}
