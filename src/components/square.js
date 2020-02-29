import React, { useState } from 'react';

// Construct a Square component with position `i`.
// Note: React Hook function names MUST BE capitalized
export default function Square({index, currentPlayer, advance, winner}) {

  // The `fill` state should be a string - 'X', 'O', or ''
  const [ fill, setFill ] = useState('');

  const handleClick = () => {
    // only if the box hasn't been filled and a winner hasn't been identified
    if (fill === '' && !winner) {
      advance(index);
      setFill(currentPlayer);
    }
  };

  return (
    // key must be specified of else the Board component would complain
    // what to do when clicked?  need context -- who's current player.
    <button className="square" onClick={handleClick}>
      {fill}
    </button>
  )

}
