import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [hasGameEnded, setHasGameEnded] = React.useState(false);
  const [hasWonGame, setHasWonGame] = React.useState(false);

  function handleAddGuess(newGuess) {
    const evaluatedGuess = checkGuess(newGuess.value, answer);
    const isRightGuess = isTheRightGuess(evaluatedGuess);
    const newGuesses = [...guesses, evaluatedGuess];
    setGuesses(newGuesses);

    if (isRightGuess || newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setHasGameEnded(true);
      if (isRightGuess) {
        setHasWonGame(true);
      }
    }
  }

  function isTheRightGuess(evaluatedGuess) {
    return (
      evaluatedGuess.find((letter) => letter.status !== "correct") === undefined
    );
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      {!hasGameEnded && <GuessInput handleAddGuess={handleAddGuess} />}
      {hasGameEnded && (
        <Banner
          status={hasWonGame ? "happy" : "sad"}
          numberOfGuesses={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
