import './App.css';
import React, { useState } from 'react';

function Game() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="Game">
      prnt(hello world)
    </div>
  );
}

export default Game;