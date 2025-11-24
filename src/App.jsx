import React, { useState } from "react";

import Header from "./components/Header";
import GameCanvas from "./components/GameCanvas";
import UIOverlay from "./components/UIOverlay";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./styles.css";

export default function App() {
  const [activePage, setActivePage] = useState(null); // null = closed

  return (
    <>
      <Header />

      <div className="game-container">
        <GameCanvas onPageChange={setActivePage} />
      </div>

      <UIOverlay>
        {activePage === "home" && <Home />}
        {activePage === "about" && <About />}
        {activePage === "projects" && <Projects />}
        {activePage === "contact" && <Contact />}
      </UIOverlay>
    </>
  );
}
