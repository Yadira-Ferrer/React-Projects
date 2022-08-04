import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('Me volví a dibujar :(');
  return (
    <button
      className="btn btn-info"
      onClick={() => {
        increment(5);
      }}
    >
      Increment
    </button>
  );
});
