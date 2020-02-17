import React, { useState } from 'react';

// Construct a Square component with position `i`.
// Note: React Hook function names MUST BE capitalized
export default function Square({index}) {

  // The `fill` state should be a string - 'X', 'O', or ''
  const [ fill, setFill ] = useState(index.toString());

  return (
    // key must be specified of else the Board component would complain
    // what to do when clicked?  need context -- who's current player.
    <button key={index} className="square" onClick={() => setFill('')}>
      {fill}
    </button>
  )

}
