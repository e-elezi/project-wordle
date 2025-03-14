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
        required
        type="text"
        id="guess-input"
        className="uppercase"
        pattern="[a-zA-Z]{5}"
        minLength={5}
        maxLength={10}
        value={value}
        title="5 letter words only"
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
}

export default GuessInput;
