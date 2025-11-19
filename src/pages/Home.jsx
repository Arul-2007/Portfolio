import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/profile';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="card">
        <h1 className="title">{PROFILE.name}</h1>
        <p className="lead">{PROFILE.bio}</p>

        <div className="profile-row">
          <img className="avatar" src={PROFILE.avatarDataUrl} alt="avatar" />
          <div>
            <div className="sub">{PROFILE.title}</div>
            <div className="meta">Interactive UI · React · Node · Three.js</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
