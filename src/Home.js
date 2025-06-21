import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [theme, setTheme] = useState('Theme');
  const [difficulty, setDifficulty] = useState('Difficulty');
  const navigate = useNavigate();


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
        <h1 className="App-header">Emoji </h1>
        <h1 className="App-header">Blast</h1>

        <br></br>
        
        <Form.Select value={theme} onChange={handleChangeTheme} className="select-custom" aria-label="Theme select" style={{width: '200px', marginBottom: '1rem' }}>
          <option disabled value="Theme">Theme</option>
          <option value="food">Food Theme</option>
          <option value="music">Music Theme</option>
        </Form.Select>
        <Form.Select value={difficulty} onChange={handleChangeDifficulty} className="select-custom" aria-label="Difficulty select" style={{width: '200px' }}>
          <option disabled value="Difficulty">Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Form.Select>

        <br></br>
        <Button onClick={handleButtonClick} disabled={theme === 'Theme' || difficulty === 'Difficulty'} className="button-custom">Start Game</Button>
    </div>
  );
}

export default Home;
