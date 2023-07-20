/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Anecdotes from "./components/anecdotes";
import VoteButton from "./components/voteButton";
import NextButton from "./components/nextButton";

export default function App() {
  const [selected, setSelected] = React.useState(0);
  const [votes, setVotes] = React.useState(0);
  const points = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  };
  function nextClick() {
    setVotes(() => points[selected]);
    setSelected(() => Math.floor(Math.random() * 7));
  }
  function voteClick() {
    setVotes((prevVotes) => prevVotes + 1);
  }

  return (
    <>
      <Anecdotes points={points} selected={selected} votes={votes} />
      <div className="flex justify-between w-full">
        <VoteButton handleClick={voteClick} />
        <NextButton handleClick={nextClick} />
      </div>
    </>
  );
}
