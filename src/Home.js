import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [theme, setTheme] = useState('Theme');
  const [difficulty, setDifficulty] = useState('Difficulty');
  const navigate = useNavigate();

  // ----------- EMOJI BLAST ---------------
  const emojis = ['😎', '😋', '🥳', '🤠', '😛', '😀'];

  // create an array of emojis for the blast effect
  // each emoji will have a random position, duration, and emoji type
  const createBlastEmojis = () => {
    return Array.from({ length: 20 }).map((_, i) => {
      const angle = Math.random() * 360;
      const distance = Math.random() * 350 + 50; // how far they go out from the center
      const x = Math.cos(angle) * distance; 
      const y = Math.sin(angle) * distance; 
      const duration = Math.random() * 1 + 1.5; 

      return {
        id: i, // unique id for each emoji
        // randomly select an emoji from the emojis
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x, 
        y,
        duration
      };
    });
  };

  const [blastEmojis] = useState(createBlastEmojis);
  // -------------------------------------

  const handleChangeTheme = (e) => {
    setTheme(e.target.value);
  };

  const handleChangeDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const handleButtonClick = () => {
    navigate('/game', { state: { theme, difficulty}, });

  };

  return (
    <div className="Home">

      <div className="blast-container">
          {blastEmojis.map(({ id, emoji, x, y, duration }) => (
            <span
              key={id}
              className="blast-emoji"
              style={{
                '--x': `${x}px`,
                '--y': `${y}px`,
                animationDuration: `${duration}s`
              }}
            >
              {emoji}
            </span>
          ))}
      </div>

        <h1 className="App-header">Emoji </h1>
        <h1 className="App-header">Blast</h1>

        <br></br>
        
        <Form.Select value={theme} onChange={handleChangeTheme} className="select-custom" aria-label="Theme select" style={{width: '200px', marginBottom: '1rem' }}>
          <option disabled value="Theme">Theme</option>
          <option value="Food">Food Theme</option>
          <option value="Music">Music Theme</option>
        </Form.Select>
        <Form.Select value={difficulty} onChange={handleChangeDifficulty} className="select-custom" aria-label="Difficulty select" style={{width: '200px' }}>
          <option disabled value="Difficulty">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </Form.Select>

        <br></br>
        <Button onClick={handleButtonClick} disabled={theme === 'Theme' || difficulty === 'Difficulty'} className="button-custom">Start Game</Button>
    </div>
  );
}

export default Home;
