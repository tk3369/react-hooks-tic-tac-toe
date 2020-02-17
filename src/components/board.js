import React, { useState } from 'react';
import Square from './square';

export default function Board() {

  const [ currentPlayer, setCurrentPlayer ] = useState('X');

  const advance = (index) => {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
      setHistory([...history, index]);
  }

  const [ history, setHistory ] = useState([]);

  return (
    <div className="board">
      <div className="info">
        Current player: {currentPlayer}
        <p></p>
        History: {history.join(", ")} 
      </div>
      <div className="board-row">
        <Square index="0" currentPlayer={currentPlayer} advance={advance} />
        <Square index="1" currentPlayer={currentPlayer} advance={advance} />
        <Square index="2" currentPlayer={currentPlayer} advance={advance} />
      </div>
      <div className="board-row">
        <Square index="3" currentPlayer={currentPlayer} advance={advance} />
        <Square index="4" currentPlayer={currentPlayer} advance={advance} />
        <Square index="5" currentPlayer={currentPlayer} advance={advance} />
      </div>
      <div className="board-row">
        <Square index="6" currentPlayer={currentPlayer} advance={advance} />
        <Square index="7" currentPlayer={currentPlayer} advance={advance} />
        <Square index="8" currentPlayer={currentPlayer} advance={advance} />
      </div>
    </div>
  )
}
