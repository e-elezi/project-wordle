import React from "react";

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ value, id }) => (
        <p className="guess uppercase" key={id}>
          {value}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
