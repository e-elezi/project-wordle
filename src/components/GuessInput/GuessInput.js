import React from "react";
import styles from "./GuessInput.module.css";

function GuessInput() {
  const [value, setValue] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Value is: ", value);
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
        className={styles.textInput}
        pattern="[a-z]{5}"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <p>Please enter 5 letter words only!</p>
    </form>
  );
}

export default GuessInput;
