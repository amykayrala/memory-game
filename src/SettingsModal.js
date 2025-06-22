import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function SettingsModal({ show, onClose, onReset}) {

  const navigate = useNavigate();

  const handleMainMenu = () => {
    navigate('/');
  };
  
  return (
   <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="App-header">Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button className="button-custom" onClick={onReset}>
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
