// displays a modal when the game is over, showing the player's score and high score
import React, { useEffect, useState } from 'react';

function GameOverModal({ score, onPlayAgain, onMainMenu }) {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const stored = parseInt(localStorage.getItem('highScore')) || 0; // default to 0 if no high score is stored
    
    // if the current score is higher than the stored high score
    if (score > stored) { 
      localStorage.setItem('highScore', score); 
      setHighScore(score); 
    } else {
      setHighScore(stored); // keep existing high score
    }
  }, [score]);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl text-center shadow-xl w-80">
        <h2 className="text-2xl font-bold mb-4 App-header">☠️ Game Over</h2>
        <p className="text-lg mb-2">Your Score: {score}</p>
        <p className="text-md text-gray-600 mb-4">💯 High Score: {highScore}</p>
        <div className="flex gap-4 justify-center">
          <button onClick={onPlayAgain} className="button-custom">Play Again</button>
          <button onClick={onMainMenu} className="button-custom">Main Menu</button>
        </div>
      </div>
    </div>
  );
}

export default GameOverModal;