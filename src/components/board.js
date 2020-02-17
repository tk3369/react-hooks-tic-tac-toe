import React, { useState } from 'react';
import Square from './square';

export default function Board() {

  const [currentPlayer, setCurrentPlayer]= useState('X');

  return (
    <div className="board">
      <div className="board-row">
        <Square index="0" currentPlayer={currentPlayer} />
        <Square index="1" currentPlayer={currentPlayer} />
        <Square index="2" currentPlayer={currentPlayer} />
      </div>
      <div className="board-row">
        <Square index="3" currentPlayer={currentPlayer} />
        <Square index="4" currentPlayer={currentPlayer} />
        <Square index="5" currentPlayer={currentPlayer} />
      </div>
      <div className="board-row">
        <Square index="6" currentPlayer={currentPlayer} />
        <Square index="7" currentPlayer={currentPlayer} />
        <Square index="8" currentPlayer={currentPlayer} />
      </div>
    </div>
  )
}
