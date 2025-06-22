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

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="App-header">Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button className="button-custom" onClick={handleRepeatGame}>
            Repeat Game
        </Button>
        <Button className="button-custom" onClick={handleMainMenu}>
            Main Menu
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default SettingsModal;
