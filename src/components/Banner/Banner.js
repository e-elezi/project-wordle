import React from "react";

function Banner({ status, numberOfGuesses, answer, restartGame }) {
  return (
    <>
      {status === "happy" ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {numberOfGuesses} {numberOfGuesses === 1 ? "guess" : "guesses"}
            </strong>
            .
          </p>
          <button onClick={() => restartGame()}>-> Restart Game{` <-`}</button>
        </div>
      ) : undefined}
      {status === "sad" ? (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={() => restartGame()}>-> Restart Game{` <-`}</button>
        </div>
      ) : undefined}
    </>
  );
}

export default Banner;
