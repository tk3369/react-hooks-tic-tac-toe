import React, { useState } from 'react';

// Construct a Square component with position `i`.
// Note: React Hook function names MUST BE capitalized
export default function Square(i) {

  // The `fill` state should be a string - 'X', 'O', or ''
  const [ fill, setFill ] = useState(i.toString());

  return (
    // key must be specified of else the Board component would complain
    // what to do when clicked?  need context -- who's current player.
    <button key={i} className="square" onClick={() => setFill('')}>
      {fill}
    </button>
  )

}
