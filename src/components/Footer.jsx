// src/components/Footer.jsx
import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {year} Arul. All rights reserved.</p>
      <p className="footer-subtext">
       
      </p>
    </footer>
  );
}

export default Footer;
