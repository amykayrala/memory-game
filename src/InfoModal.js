import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function InfoModal({ show, onClose, onReset}) {

  const navigate = useNavigate();

  const handleMainMenu = () => {
    navigate('/');
  };
  
  return (
   <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="App-header text-center">How to Play</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Emoji Blast Instructions:</p>
        <ul>
          <li>Select a Theme and Difficulty.</li>
          <li>Click on the correct emoji to score points.</li>
          <li>Watch out for the wrong ones!</li>
        </ul>
      </Modal.Body>
    </Modal>
  );
}

export default InfoModal;
