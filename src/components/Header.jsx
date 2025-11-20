// src/components/Header.jsx
// Top navigation bar that triggers page changes + auto-driving.

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PROFILE } from '../data/profile';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="header-bar">
      <div className="header-brand">
        <div className="header-logo">AP</div>
        <div>
          <div className="header-name">{PROFILE.name}</div>
          <div className="header-title">{PROFILE.title}</div>
        </div>
      </div>

      <nav className="header-nav">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={
              location.pathname === item.path
                ? 'nav-btn-active'
                : 'nav-btn'
            }
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
