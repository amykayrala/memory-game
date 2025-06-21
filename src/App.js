import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './Game';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router basename="/memory-game">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
