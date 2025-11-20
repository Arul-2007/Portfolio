// src/data/profile.js
// Core profile + asset configuration used across the app.

export const PROFILE = {
  name: 'ARUL PALANIVEL',
  title: 'Creative Full-stack Developer',
  bio: 'I build interactive web experiences. This portfolio uses a 3D Thar driving through a desert environment to navigate pages (Home → About → Projects → Contact).',
  email: 'arul@example.com',

  // 3D model file paths (put .glb files into public/models/)
  assets: {
    car: '/models/thar.glb',           // Thar car model
    environment: '/models/desert.glb', // Desert environment (ground, sky, props)
    billboard: '/models/billboard.glb',// Achievement board (About)
    workshop: '/models/workshop.glb',  // Workshop (Projects)
    phone: '/models/phone.glb'         // Phone/gas-station (Contact)
  },

  // Logical 3D coordinates for page locations (tweak later for your models)
  locations: {
    home:    { x: 0,   z: 0,   rotationY: Math.PI },        // garage / start
    about:   { x: 18,  z: -8,  rotationY: Math.PI / 2 },    // billboard
    projects:{ x: -16, z: -22, rotationY: -Math.PI / 2 },   // workshop
    contact: { x: 10,  z: 22,  rotationY: 0 }               // phone/gas station
  },

  // Driving physics & parameters (adjust to taste)
  driving: {
    maxSpeed: 6.0,       // units / second
    acceleration: 8.0,   // units / second^2
    braking: 12.0,       // deceleration
    uTurnSpeed: 7.0,     // speed during U-turn
    driftDuration: 0.9,  // seconds for drift/u-turn animation
    steerSpeed: 2.6      // how fast the car turns (user control)
  }
};
