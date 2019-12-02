/* eslint-disable react/jsx-no-undef */
import React from 'react';
import GameBanner from './components/GameBanner';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="container border">
      <GameBanner />
      <div className="text-center">
        <GameBoard boardSize={ 5 } />
      </div>
    </div>
  );
}

export default App;
