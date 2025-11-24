// src/pages/Contact.jsx
import React from "react";
import { PROFILE } from "../data/profile";

export default function Contact() {
  return (
    <div className="ui-card">
      <h1 className="ui-title">Contact</h1>

      <p className="ui-text">
        You can reach me anytime using the link below:
      </p>

      <p className="ui-text">
        <strong>Email:</strong>
        <br />
        <a href={`mailto:${PROFILE.email}`} className="project-link">
          {"arulpalanivel2007@gmail.com"}
        </a>
      </p>
        <p className="ui-text">
        <strong>GitHub:</strong>
        <br />
      <a href="https://github.com/Arul-2007" className="project-link">https://github.com/Arul-2007</a>
      </p>
    <p className="ui-text">
        <strong>LinkedIn:</strong>
        <br />
      <a href="https://www.linkedin.com/in/arul-p-b1427a339/" className="project-link">https://www.linkedin.com/in/arul-p</a>
      </p>
    </div>
  );
}
