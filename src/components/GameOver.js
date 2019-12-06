import React from "react";

const GameOver = ({ click }) => {
  return (
    <div className="game-over">
      <div className="header">You win !</div>
      <div className="body">
        <div>Time:</div>
        <div>Click: {click}</div>
        <div>Total score:</div>
      </div>
      <button className="btn btn-lg btn-block btn-success">Play again</button>
    </div>
  );
};

export default GameOver;
