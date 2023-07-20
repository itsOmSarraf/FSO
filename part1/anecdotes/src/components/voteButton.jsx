/* eslint-disable react/prop-types */
// import React from "react";

export default function VoteButton({ handleClick }) {
  return (
    <button className="border-black border-2 p-5" onClick={handleClick}>
      vote
    </button>
  );
}
