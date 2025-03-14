import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ guesses }) {
  const numOfRows = NUM_OF_GUESSES_ALLOWED;
  const numOfColumns = 5;

  return (
    <div className="guess-results">
      {range(0, numOfRows).map((row, i) => (
        <p className="guess" key={i}>
          {range(0, numOfColumns).map((column, j) => (
            <span className="cell uppercase" key={j}>
              {guesses[i] !== undefined ? guesses[i].value[j] : ""}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
