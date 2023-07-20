/* eslint-disable react/prop-types */
// import React from "react";

export default function NextButton({ handleClick }) {
  return (
    <button className="border-black border-2 p-5" onClick={handleClick}>
      next anecdote
    </button>
  );
}
