// src/components/PageTriggers.jsx
// Invisible 3D trigger zones that detect when the car enters a page location.

import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useNavigate, useLocation } from 'react-router-dom';
import { PROFILE } from '../data/profile';

export default function PageTriggers({ movement }) {
  const navigate = useNavigate();
  const current = useLocation().pathname;

  // Refs for trigger areas
  const triggers = {
    home: useRef(),
    about: useRef(),
    projects: useRef(),
    contact: useRef()
  };

  // We will use these to detect overlap (simple AABB)
  const carBox = new THREE.Box3();
  const triggerBox = new THREE.Box3();

  const checkTrigger = (name, ref, route) => {
    if (!movement.current.carObject || !ref.current) return;

    carBox.setFromObject(movement.current.carObject);
    triggerBox.setFromObject(ref.current);

    if (carBox.intersectsBox(triggerBox)) {
      if (current !== route) {
        movement.current.speed = 0; // stop car
        navigate(route);
      }
    }
  };

  useFrame(() => {
    checkTrigger('home', triggers.home, '/');
    checkTrigger('about', triggers.about, '/about');
    checkTrigger('projects', triggers.projects, '/projects');
    checkTrigger('contact', triggers.contact, '/contact');
  });

  // Size of each trigger zone
  const BOX_SIZE = 3;

  return (
    <group>
      {/* HOME */}
      <mesh
        ref={triggers.home}
        position={[PROFILE.locations.home.x, 0.5, PROFILE.locations.home.z]}
        visible={false}
      >
        <boxGeometry args={[BOX_SIZE, 2, BOX_SIZE]} />
        <meshBasicMaterial color="red" wireframe />
      </mesh>

      {/* ABOUT */}
      <mesh
        ref={triggers.about}
        position={[PROFILE.locations.about.x, 0.5, PROFILE.locations.about.z]}
        visible={false}
      >
        <boxGeometry args={[BOX_SIZE, 2, BOX_SIZE]} />
        <meshBasicMaterial color="green" wireframe />
      </mesh>

      {/* PROJECTS */}
      <mesh
        ref={triggers.projects}
        position={[PROFILE.locations.projects.x, 0.5, PROFILE.locations.projects.z]}
        visible={false}
      >
        <boxGeometry args={[BOX_SIZE, 2, BOX_SIZE]} />
        <meshBasicMaterial color="blue" wireframe />
      </mesh>

      {/* CONTACT */}
      <mesh
        ref={triggers.contact}
        position={[PROFILE.locations.contact.x, 0.5, PROFILE.locations.contact.z]}
        visible={false}
      >
        <boxGeometry args={[BOX_SIZE, 2, BOX_SIZE]} />
        <meshBasicMaterial color="yellow" wireframe />
      </mesh>
    </group>
  );
}
