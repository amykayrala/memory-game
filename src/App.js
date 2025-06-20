import './App.css';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Emoji </h1>
      <h1 className="App-header">Blast</h1>
      {/*{!gameStarted ? (
        <button className="btn btn-primary" onClick={startGame}>
          Start Game
        </button>
      ) : (
        <p>Game is starting...</p>
      )}
    </div>*/}
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
      <button className="button-custom">Start Game</button>
    </div>
  );
}

export default App;
