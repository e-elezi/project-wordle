import React from "react";
import { range } from "../../utils";

//receives an array of objects {letter, status}
function Guess({ evaluatedGuess }) {
  return (
    <p className="guess">
      {range(0, 5).map((column, i) => {
        if (evaluatedGuess === undefined) {
          return <span className="cell" key={i} />;
        }

        return (
          <span
            className={`cell uppercase ${evaluatedGuess[i].status}`}
            key={i}
          >
            {evaluatedGuess[i].letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
