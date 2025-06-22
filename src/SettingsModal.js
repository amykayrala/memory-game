import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function SettingsModal({ show, onClose, theme, difficulty }) {

  const navigate = useNavigate();

  const handleRepeatGame = () => {
    navigate('/game', { state: { theme, difficulty } });
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
