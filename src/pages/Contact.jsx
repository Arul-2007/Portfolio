// src/pages/Contact.jsx

import React from 'react';
import { PROFILE } from '../data/profile';

export default function Contact() {
  return (
    <div className="ui-card">
      <h1 className="ui-title">Contact</h1>

      <p className="ui-text">
        Feel free to reach out for collaborations, project discussions,
        or technical consultations.
      </p>

      <p className="ui-text">
        Email:
        <a href={`mailto:${PROFILE.email}`} className="project-link">
          {" "}
          {PROFILE.email}
        </a>
      </p>

      <p className="ui-text">
        You can also explore my GitHub repositories using the links provided
        in the projects section.
      </p>
    </div>
  );
}
