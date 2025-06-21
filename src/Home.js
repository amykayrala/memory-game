import './App.css';
import Form from 'react-bootstrap/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './Game';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">

        <Routes>
          <Route path="/game" element={<Game />} />
        </Routes>

        <h1 className="App-header">Emoji </h1>
        <h1 className="App-header">Blast</h1>

        <br></br>
        
        <Form.Select className="select-custom" aria-label="Theme select" style={{width: '200px', marginBottom: '1rem' }}>
          <option>Pick a Theme</option>
          <option value="food">Food Theme</option>
          <option value="music">Music Theme</option>
        </Form.Select>
        <Form.Select className="select-custom" aria-label="Level select" style={{width: '200px' }}>
          <option>Level</option>
          <option value="food">Easy</option>
          <option value="music">Medium</option>
          <option value="music">Hard</option>
        </Form.Select>

        <br></br>
        <Button as={NavLink} to="/game" className="button-custom">Start Game</Button>
    </div>
  );
}

export default Home;
