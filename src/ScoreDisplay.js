// component displays the current score at the top right corner of the game screen

function ScoreDisplay({ score }) {
  return (
    <div className="absolute top-4 right-6 bg-black/80 text-white p-2 rounded-xl shadow-lg text-lg z-10">
      Score: {score}
    </div>
  );
}

export default ScoreDisplay;
