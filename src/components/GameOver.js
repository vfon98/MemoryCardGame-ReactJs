import React from "react";

const GameOver = ({ click, time, score, handleRestartGame }) => {
  return (
    <div className="game-over shadow">
      <div className="header">You win !</div>
      <div className="body">
        <div>
          Time: <b>{time}</b>s &nbsp;Click: <b>{click}</b>
        </div>
        <div>
          Total score: <b>{score}</b>
        </div>
      </div>
      <button
        className="btn btn-lg btn-block btn-success"
        onClick={handleRestartGame}
      >
        Play again
      </button>
    </div>
  );
};

export default GameOver;
