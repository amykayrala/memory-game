import './App.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiSettings } from 'react-icons/fi';
import SettingsModal from './SettingsModal';
import GameOverModal from './GameOverPopup'

const emojiThemes = { // Define color themes with arrays of colors
  Food: ['🍩', '🍔', '🍟', '🌭', '🍕', '🌮'], 
  Music: ['🎶', '🎧', '🎸', '🥁', '🎹', '🎷'],
};

const emojiSpeed ={
  Easy : {speed : 1, spawnRate: 1500},
  Medium : {speed : 2, spawnRate: 1000},
  Hard : {speed : 3, spawnRate: 500},
}


function Game() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [targetEmoji, setTargetEmoji] = useState(null);
  const location = useLocation();
  const { theme, difficulty } = location.state || {};
  const emojis = emojiThemes[theme];
  const {speed, spawnRate} = emojiSpeed[difficulty];
  const themeChosen = `${theme}-theme`;
  const [fallingEmojis, setFallingEmojis] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [showGameover, setShowGameover] = useState(false);



  function getRandomEmoji(emojis) { // Function to get a random emoji from the provided array
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const [score, setScore] = useState(0);
  const highScore = localStorage.getItem("highScore") || 0;
    if (score > highScore) {
        localStorage.setItem("highScore", score);
    }

  const handleEmojiClick  = (emojiObj) => {
    if (emojiObj.emoji == targetEmoji ){
      setScore(score+1)
      setFallingEmojis(prev => prev.filter(e => e.id !== emojiObj.id));

    } else {
      setIsGameOver(true)
    }
  }
  
  function resetGame() { // Function to reset the game state
    setScore(0); // Reset the score
    setIsGameOver(false);
    setShowGameover(false);
    setShowSettings(false);
    setFallingEmojis([]);
    setTargetEmoji(getRandomEmoji(emojis));
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
    }, spawnRate);
  
    return () => clearInterval(spawn);
  }, [spawnRate]);

  useEffect(() => {
    const interval = setInterval(() => {
        setFallingEmojis(prev => {
            const updated = prev.map(e => ({ ...e, y: e.y + speed }));
            const missedTarget = updated.find(e => e.emoji === targetEmoji && e.y >= 100);
            if (missedTarget) {
                setIsGameOver(true);
              return [];
            }
            return updated.filter(e => e.y < 100);
          });
    }, 50);
  
    return () => clearInterval(interval);
  }, [speed]);

  useEffect(() => {
    if (isGameOver) {
      setShowGameover(true);
    }
  }, [isGameOver]);

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

        {isGameOver && (
            <GameOverModal
                score={score}
                highScore={highScore}
                show={showGameover}
                onClose={() => setShowGameover(false)}
                onReset={resetGame}

            />)
        }
        
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col className="text-start">
            <h2 className="score">Score: {score}</h2>
            <h2 className="highscore">High Score: {highScore}</h2>
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
          onReset={resetGame}
        />

      </Container>
   </div>

  );
}

export default Game;
