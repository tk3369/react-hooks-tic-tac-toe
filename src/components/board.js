import React, { useState } from 'react';
import Square from './square';

export default function Board() {

  // currentPlayer is either 'X' or 'O'
  const [ currentPlayer, setCurrentPlayer ] = useState('X');

  // winner is '', 'X', or 'O'
  const [ winner, setWinner ] = useState('');

  // Keep track of every move in an array
  const [ history, setHistory ] = useState([]);

  // Advance to the next step when a square was clicked
  const advance = (index) => {
    // Update history
    const newHistory = [...history, { position: index, player: currentPlayer }]
    setHistory(newHistory);

    // Check winner
    const currentPlayerMoves = newHistory
      .filter(x => x.player === currentPlayer)
      .map(x => x.position);
    console.log(currentPlayerMoves);

    // Either update `winner` or advance to the next player
    const won = playerHasWon(currentPlayerMoves);
    if (won) {
      console.log('Player ' + currentPlayer + ' has Won!');
      setWinner(currentPlayer);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  return (
    <div className="board">
      <div className="info">
        Current player: {currentPlayer}
        <p></p>
        History: {historyString(history)}
        <p></p>
        {winner ? 'Winner: ' + winner : ''}
      </div>
      {[...Array(3).keys()].map(row => {
        return (
          // key is required when I put this inside a loop
          <div key={row} className="board-row">
            {
              [...Array(3).keys()].map(col => {
                const index = row * 3 + col;
                return (
                  // key is required when I put this inside a loop
                  <Square key={col} index={index}
                    currentPlayer={currentPlayer}
                    advance={advance}
                    winner={winner}
                  />)
              })
            }
          </div>
        )
      })}
    </div>
  )
}

// Convert history arrray into a string
// @param history An array of objects with `position` and `player` attributes
//          where `position` is an integer and `player` is 'X' or 'O'.
function historyString(history) {
  return history.map(x => x.player + ':' + x.position).join(", ");
}

// Return true if the provided positions matches winning pattern
// @param playerMoves an array of integers (position values 0 to 8)
function playerHasWon(playerMoves) {
  const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return patterns.find(x => x.every(v => playerMoves.includes(v))) !== undefined;
}
