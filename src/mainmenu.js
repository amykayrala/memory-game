import './App.css';

function MainMenu() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="App">
      <h1 className="App-header poetsen-one-regular">Emoji Blast</h1>
      {!gameStarted ? (
        <button className="btn btn-primary" onClick={startGame}>
          Start Game
        </button>
      ) : (
        <p>Game is starting...</p>
      )}
    </div>
  );
}

export default MainMenu;