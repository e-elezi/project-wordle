import React from "react";

//send a Guess in the form {value, id}
function GuessInput({ handleAddGuess }) {
  const [value, setValue] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleAddGuess({
      value,
      id: Math.random(),
    });
    setValue("");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        className="uppercase"
        pattern="[a-z]{5}"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <p>Please enter 5 letter words only!</p>
    </form>
  );
}

export default GuessInput;
