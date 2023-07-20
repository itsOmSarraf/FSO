/* eslint-disable react/prop-types */
export default function Anecdotes({ points, selected, votes }) {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const updatedPoints = { ...points }; // Create a new object by spreading the values from the original points object
  updatedPoints[selected] = votes; // Update the specific value for the selected anecdote

  console.log(updatedPoints);

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div>votes count {votes}</div>
    </div>
  );
}
