import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function SettingsModal({ show, onClose, theme, difficulty }) {

  const navigate = useNavigate();
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleRepeatGame = () => {
    navigate('/game', { state: { theme, difficulty } });
    setScore(0); // reset score to 0
    setIsGameOver(false);
    onClose(); // close the modal after resetting the game
  };

  const handleMainMenu = () => {
    navigate('/');
  };

  const handleChangeTheme  = (e) => {
    if (e.target.innerText == targetEmoji ){
      setScore(score+1)

    } else {
      setIsGameOver(false)
    }
  }
  
  return (
   <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="App-header">Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button className="button-custom" onClick={handleRepeatGame}>
            Start Over
        </Button>
        <Button className="button-custom" onClick={handleMainMenu}>
            Main Menu
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default SettingsModal;
