import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard";

// Pick a random word on every pageload.
const initialAnswer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ initialAnswer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [hasGameEnded, setHasGameEnded] = React.useState(false);
  const [hasWonGame, setHasWonGame] = React.useState(false);
  const [pressedLetters, setPressedLetters] = React.useState({});
  const [answer, setAnswer] = React.useState(initialAnswer);

  function handleAddGuess(newGuess) {
    const evaluatedGuess = checkGuess(newGuess.value, answer);
    const newPressedLetters = getPressedLetters(evaluatedGuess, pressedLetters);
    setPressedLetters(newPressedLetters);

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

  function getPressedLetters(evaluatedGuess, currentEvaluatedLetters) {
    let pressedLetters = { ...currentEvaluatedLetters };

    evaluatedGuess.forEach((guess) => {
      const letter = guess.letter;
      pressedLetters[letter] = guess.status;
    });

    return pressedLetters;
  }

  function isTheRightGuess(evaluatedGuess) {
    return (
      evaluatedGuess.find((letter) => letter.status !== "correct") === undefined
    );
  }

  function restartGame() {
    setGuesses([]);
    setHasGameEnded(false);
    setHasWonGame(false);
    setPressedLetters({});
    const newWord = sample(WORDS);
    setAnswer(newWord);
    console.info({ newWord });
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      {!hasGameEnded && <GuessInput handleAddGuess={handleAddGuess} />}
      {!hasGameEnded && <Keyboard pressedLetters={pressedLetters} />}
      {hasGameEnded && (
        <Banner
          status={hasWonGame ? "happy" : "sad"}
          numberOfGuesses={guesses.length}
          answer={answer}
          restartGame={restartGame}
        />
      )}
    </>
  );
}

export default Game;
