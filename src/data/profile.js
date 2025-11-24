// src/data/profile.js
// Basic profile info + grid configuration for the Hunter-Assassin portfolio game.

export const PROFILE = {
  name: 'ARUL PALANIVEL',
  title: 'Creative Full-stack Developer',
  email: 'arul@example.com',
  bio: 'I build interactive web experiences. Navigate the grid to open each portfolio section.',

  // Grid configuration
  grid: {
    cols: 11,       // number of columns
    rows: 11,       // number of rows
    tileSize: 64,   // pixels per tile (adjustable)
    start: { x: 5, y: 9 } // player start tile (col, row) — origin (0,0) top-left
  },

  // Map special tile locations (col, row)
  locations: {
    home:     { x: 1, y: 1 }, // house tile -> Home
    mailbox:  { x: 9, y: 1 }, // mailbox -> About
    toolkit:  { x: 1, y: 9 }, // toolkit -> Projects
    phone:    { x: 9, y: 9 }  // phone -> Contact
  }
};
