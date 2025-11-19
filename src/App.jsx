import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HologramNavigation from './components/HologramNavigation';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

import './styles.css';

export default function App() {
  return (
    <div className="app-root">
      <Router>
        <Header />

        <main className="layout">
          {/* Left-side content */}
          <section className="primary">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </section>

          {/* Right-side hologram navigation */}
          <aside className="aside">
            <HologramNavigation />

            <div className="card small">
              <h4>Quick Links</h4>
              <p className="muted">
                Click the house to move through pages, or use the menu above.
              </p>
            </div>
          </aside>
        </main>

        <footer className="site-footer">
          © {new Date().getFullYear()} ARUL PALANIVEL
        </footer>
      </Router>
    </div>
  );
}
