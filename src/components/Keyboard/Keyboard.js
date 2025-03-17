import React from "react";

//Pressed Letters should be a Record of letter to the corresponding status
function Keyboard({ pressedLetters }) {
  const allLetterRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div>
      {allLetterRows.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map((letter, i) => {
            const className =
              pressedLetters[letter] !== undefined
                ? `keyboard-letter ${pressedLetters[letter]}`
                : "keyboard-letter";

            return (
              <div key={letter} className={className}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
