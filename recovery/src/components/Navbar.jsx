// src/components/Navbar.jsx
import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-logo">MyPortfolio</div>
      <nav className={`nav-links ${open ? "nav-open" : ""}`}>
        <button onClick={() => handleNavClick("home")}>Home</button>
        <button onClick={() => handleNavClick("about")}>About</button>
        <button onClick={() => handleNavClick("skills")}>Skills</button>
        <button onClick={() => handleNavClick("projects")}>Projects</button>
        <button onClick={() => handleNavClick("contact")}>Contact</button>
      </nav>
      <button
        className="nav-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

export default Navbar;
