import './App.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const emojiThemes = { // Define color themes with arrays of colors
  Food: ['🍩', '🍔', '🍟', '🌭', '🍕', '🌮'], 
  Music: ['🎶', '🎧', '🎸', '🥁', '🎹', '🎷'],
};

function Game() {
  const [score, setScore] = useState(0);
    const [highscore, setHscore] = useState(() => {
        const storedHscore = localStorage.getItem('highScore');
        return storedHscore ? parseInt(storedHscore, 10) : 0;
    });
  const location = useLocation();
  const { theme, difficulty } = location.state || {};

  const themeChosen = `${theme}-theme`;
   // const themeChosen = `${difficulty}-theme`;
  
  return (
    <div className={`Game ${themeChosen}`}>
        <h2 className="score">Score: {score}</h2>
        <h2 className="highscore">High Score: {highscore}</h2>

    </div>

  );
}

export default Game;
