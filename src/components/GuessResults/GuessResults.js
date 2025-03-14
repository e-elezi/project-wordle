import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <Guess key={index} evaluatedGuess={guesses[index]}></Guess>
      ))}
    </div>
  );
}

export default GuessResults;
