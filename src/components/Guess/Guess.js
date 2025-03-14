import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(0, 5).map((column, i) => (
        <span className="cell uppercase" key={i}>
          {value !== undefined ? value.value[i] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
