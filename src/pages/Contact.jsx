import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="card">
        <h2>Contact</h2>

        <p className="muted">
          Email:&nbsp;
          <a href={`mailto:${PROFILE.email}`} className="link">
            {PROFILE.email}
          </a>
        </p>

        <p className="muted">
          You may also connect via GitHub using the project links.
        </p>
      </div>
    </motion.div>
  );
}
