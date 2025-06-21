import './App.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const emojiThemes = { // Define color themes with arrays of colors
  Food: ['🍩', '🍔', '🍟', '🌭', '🍕', '🌮'], 
  Music: ['🎶', '🎧', '🎸', '🥁', '🎹', '🎷'],
};

function Game() {
  const [score, setScore] = useState(0);
  const location = useLocation();
  const { theme, difficulty } = location.state || {};


  return (
    <div className='Game'>
      <p>Theme: {theme}</p>
      <p>Difficulty: {difficulty}</p>

    </div>

  );
}

export default Game;