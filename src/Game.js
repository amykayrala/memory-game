import './App.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiSettings } from 'react-icons/fi';

const emojiThemes = { // Define color themes with arrays of colors
  Food: ['🍩', '🍔', '🍟', '🌭', '🍕', '🌮'], 
  Music: ['🎶', '🎧', '🎸', '🥁', '🎹', '🎷'],
};


function Game() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [targetEmoji, setTargetEmoji] = useState('null');

  const location = useLocation();
  const { theme, difficulty } = location.state || {};


  const emojis = emojiThemes[theme];
  const themeChosen = `${theme}-theme`;
  // const themeChosen = `${difficulty}-theme`;

  function getRandomEmoji(emojis) { // Function to get a random color from the provided array
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const [score, setScore] = useState(0);
  const [highscore, setHscore] = useState(() => {
      const storedHscore = localStorage.getItem('highScore');
        return storedHscore ? parseInt(storedHscore, 10) : 0;
  });

  const handleChangeTheme  = (e) => {
    if (e.target.innerText == targetEmoji ){
      setScore(score+1)

    } else {
      setIsGameOver(false)
    }
  }

  function resetGame() { // Function to reset the game state
    setScore(0); // Reset the score
    setIsGameOver(false);
  };


  useEffect(() => {
    setTargetEmoji(emojis[Math.floor(Math.random() * emojis.length)]);;
  }, []);

  
  return (
    <div className={`Game ${themeChosen}`}>
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
            <FiSettings style={{fontSize: '2rem', marginLeft: '10px', marginTop: '10px'}}/>

          </Col>
        </Row>
      </Container>


        


    </div>

  );
}

export default Game;
