import houseImg from "./house.png";
import mailboxImg from "./mailbox.png";
import ninjaImg from "./ninja.png";
import phoneImg from "./phone.png";
import toolkitImg from "./toolkit.png";
import tilesImg from "./tiles.png";


import React, { useState, useEffect, useCallback } from "react";
import "./game.css";

// GRID OUTSIDE COMPONENT
const GRID = [
  ["empty","path","path","path","path","empty","path","path","path","path"],
  ["empty","path","obstacle","obstacle","path","empty","empty","path","empty","path"],
  ["empty","path","path","empty","path","path","empty","home","empty","path"],
  ["empty","obstacle","skills","path","empty","path","empty","obstacle","obstacle","path"],
  ["empty","empty","empty","path","empty","path","path","path","path","path"],
  ["empty","contact","empty","path","path","empty","empty"],
  ["empty","path","empty","empty","path","path","path","path","obstacle","path"],
  ["path","path","path","empty","obstacle","empty","empty","projects","path","path"],
  ["path","empty","empty","empty","obstacle","empty","empty","empty","empty","path"],
   ["path","path","path","path","path","path","path","path","path","path"]
];



export default function GameCanvas({ onPageChange }) {


 const [player, setPlayer] = useState({ x: 0, y: 2 });

  const canMove = useCallback((toY, toX) => {
    const cell = GRID[toY][toX];
    return (
      cell === "path" ||
      cell === "home" ||
      cell === "projects" ||
      cell === "skills" ||
      cell === "contact"
    );
  }, []);

  const handleMove = useCallback(
    (e) => {
      let { x, y } = player;

      if (e.key === "ArrowUp") y -= 1;
      if (e.key === "ArrowDown") y += 1;
      if (e.key === "ArrowLeft") x -= 1;
      if (e.key === "ArrowRight") x += 1;

      if (y < 0 || y >= GRID.length) return;
      if (x < 0 || x >= GRID[0].length) return;

      if (canMove(y, x)) {
        setPlayer({ x, y });
      }
    },
    [player, canMove]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleMove);
    return () => window.removeEventListener("keydown", handleMove);
  }, [handleMove]);

useEffect(() => {
  const tile = GRID[player.y][player.x];

  if (tile === "home") onPageChange("home");
  else if (tile === "skills") onPageChange("about");
  else if (tile === "projects") onPageChange("projects");
  else if (tile === "contact") onPageChange("contact");
  else onPageChange(null); // close UI when leaving tile
}, [player]);


  return (
    <div className="game-container">
      {GRID.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => {
            const isPlayer = player.y === rowIndex && player.x === colIndex;

            return (
              <div key={colIndex} className="cell">

                {/* PLAYER */}
                {isPlayer && (
                  <img src={ninjaImg} className="ninja" alt="player" />
                )}

                {/* HOME */}
                {!isPlayer && cell === "home" && (
                  <img src={houseImg} className="tile-img" alt="home" />
                )}

                {/* CONTACT */}
                {!isPlayer && cell === "contact" && (
                  <img src={mailboxImg} className="tile-img" alt="contact" />
                )}

                {/* PROJECTS */}
                {!isPlayer && cell === "projects" && (
                  <img src={toolkitImg} className="tile-img" alt="projects" />
                )}

                {/* SKILLS */}
                {!isPlayer && cell === "skills" && (
                  <img src={phoneImg} className="tile-img" alt="skills" />
                )}

                {/* PATH */}
                {!isPlayer && cell === "path" && (
                  <img src={tilesImg} className="tile-img" alt="path" />
                )}

              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
