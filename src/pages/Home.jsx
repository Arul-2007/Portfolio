// src/pages/Home.jsx
import React from "react";
import { PROFILE } from "../data/profile";

export default function Home() {
  return (
    <div className="ui-card">
      <h1 className="ui-title">{PROFILE.name}</h1>
      <h2 className="ui-sub">{PROFILE.title}</h2>

      <p className="ui-text">{PROFILE.bio}</p>

    
    </div>
  );
}
