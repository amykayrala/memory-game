import './App.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiSettings } from 'react-icons/fi';
import SettingsModal from './SettingsModal';

const emojiThemes = { // Define color themes with arrays of colors
  Food: ['🍩', '🍔', '🍟', '🌭', '🍕', '🌮'], 
  Music: ['🎶', '🎧', '🎸', '🥁', '🎹', '🎷'],
};

const emojiSpeed ={
  Easy : 500,
  Medium : 1000,
  Hard : 1500
}


function Game() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [targetEmoji, setTargetEmoji] = useState(null);
  const location = useLocation();
  const { theme, difficulty } = location.state || {};
  const emojis = emojiThemes[theme];
  const speed = emojiSpeed[difficulty];
  const themeChosen = `${theme}-theme`;
  const [fallingEmojis, setFallingEmojis] = useState([]);
  const [showSettings, setShowSettings] = useState(false);



  function getRandomEmoji(emojis) { // Function to get a random emoji from the provided array
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(() => {
      const storedHighscore = localStorage.getItem('highScore');
        return storedHighscore ? parseInt(storedHighscore, 10) : 0;
  });

  const handleEmojiClick  = (emojiObj) => {
    if (emojiObj.emoji == targetEmoji ){
      setScore(score+1)
      setFallingEmojis(prev => prev.filter(e => e.id !== emojiObj.id));
      if (score >= highscore) {
        setHighscore(score);
      }

    } else {
      setIsGameOver(true)
    }
  }

  function resetGame() { // Function to reset the game state
    setScore(0); // Reset the score
    setIsGameOver(false);
  };


  useEffect(() => {
    setTargetEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
  }, []);

  useEffect(() => {
    const spawn = setInterval(() => {
      const newEmoji = {
        id: Date.now(),
        emoji: getRandomEmoji(emojis),
        x: Math.random() * 90, // percent
        y: 0
      };
      setFallingEmojis(prev => [...prev, newEmoji]);
    }, 1000);
  
    return () => clearInterval(spawn);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFallingEmojis(prev =>
        prev
          .map(e => ({ ...e, y: e.y + 2 })) // move down by 2%
          .filter(e => e.y < 100)          // remove if off-screen
      );
    }, 50);
  
    return () => clearInterval(interval);
  }, []);

  
  return (
    <div className={`Game ${themeChosen}`}>
        {fallingEmojis.map(e => (
            <div
                key={e.id}
                onClick={() => handleEmojiClick(e)}
                style={{
                position: 'absolute',
                top: `${e.y}%`,
                left: `${e.x}%`,
                fontSize: '4rem',
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'top 0.05s linear',
                }}
            >
                {e.emoji}
            </div>
            ))}

      <Container fluid>
        <Row className="justify-content-md-center">
          <Col className="text-start">
            <h2 className="score">Score: {score}</h2>
            <h2 className="highscore">High Score: {highscore}</h2>
          </Col>
          <Col className="text-center">
            <div className='score' style={{fontSize: '3rem'}}> Catch the {targetEmoji} !</div>
          </Col>
          <Col className="text-end">
            <span onClick={() => setShowSettings(true)} style={{ cursor: 'pointer' }}>
              <FiSettings style={{ fontSize: '2rem', marginLeft: '10px', marginTop: '10px' }} />
            </span>
          </Col>
        </Row>

        <SettingsModal
          show={showSettings}
          onClose={() => setShowSettings(false)}
          theme={theme}
          difficulty={difficulty}
        />

      </Container>
   </div>

  );
}

export default Game;
