import React from 'react';
import Square from './square';

export default function Board() {

  // The special syntax creates a range from 0..8
  // The map function is used to iterate over the array and create Square objects
  const squares = [...Array(9).keys()].map(i => Square(i))

  return (
    <div className="board">
      <div className="board-row">
        {squares.slice(0, 3)}
      </div>
      <div className="board-row">
        {squares.slice(3, 6)}
      </div>
      <div className="board-row">
        {squares.slice(6, 9)}
      </div>
    </div>
  )
}
