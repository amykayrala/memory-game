// displays a modal when the game is over, showing the player's score and high score
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function GameOverModal({ score, highScore, show, onClose, onReset }) {
  //const [highScore, setHighScore] = useState({score});
  const navigate = useNavigate();

  const handleMainMenu = () => {
    navigate('/');
  };

  /*
  useEffect(() => {
    const stored = parseInt(localStorage.getItem('highScore')) || 0; // default to 0 if no high score is stored
    
    // if the current score is higher than the stored high score
    if (score > stored) { 
      localStorage.setItem('highScore', score); 
      setHighScore(score); 
    } else {
      setHighScore(stored); // keep existing high score
    }
  }, [score]); */

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header>
        <Modal.Title className="App-header">☠️ Game Over</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="poetsen-one-regular text-center">Your Score: {score}</p>
        <p className="poetsen-one-regular text-center">High Score: {highScore}</p>
        <Button className="button-custom" onClick={onReset}>
            Play Again
        </Button>
        <Button className="button-custom" onClick={handleMainMenu}>
            Main Menu
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default GameOverModal;