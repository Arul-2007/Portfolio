import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PROFILE } from '../data/profile';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="site-header">
      <div className="brand" onClick={() => navigate('/')}>
        <div className="logo">AP</div>
        <div className="brand-text">
          <div className="name">{PROFILE.name}</div>
          <div className="role">{PROFILE.title}</div>
        </div>
      </div>

      <nav className="nav">
        <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
        <button className="nav-btn" onClick={() => navigate('/projects')}>Projects</button>
        <button className="nav-btn" onClick={() => navigate('/about')}>About</button>
        <button className="nav-btn" onClick={() => navigate('/contact')}>Contact</button>
      </nav>
    </header>
  );
}
