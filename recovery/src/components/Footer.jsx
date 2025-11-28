// src/components/Footer.jsx
import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Your Name. All rights reserved.</p>
      <p className="footer-subtext">
        Crafted with React, JavaScript, and gradients.
      </p>
    </footer>
  );
}

export default Footer;
