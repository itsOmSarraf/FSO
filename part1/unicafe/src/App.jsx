/* eslint-disable react/prop-types */
import React from "react";

function StatisticsLine({ text, value }) {
  return (
    <>
      <tr>
        <p>
          {text} {value}
        </p>
      </tr>
    </>
  );
}
function Statistics({ good, neutral, bad, all, average }) {
  return (
    <>
      <h1>statistics</h1>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={`${(good / all) * 100} %`} />
    </>
  );
}

export default function App() {
  const [good, setGood] = React.useState(0);
  const [neutral, setNeutral] = React.useState(0);
  const [bad, setBad] = React.useState(0);
  const [all, setAll] = React.useState(good + neutral + bad);
  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    setAll(good + neutral + bad);
    setAverage((good - bad) / (good + neutral + bad));
  }, [good, neutral, bad]);

  return (
    <>
      <div>
        <h1>give Feedback</h1>

        <button onClick={() => setGood((prevGood) => prevGood + 1)}>
          good
        </button>
        <button onClick={() => setNeutral((prevNeutral) => prevNeutral + 1)}>
          neutral
        </button>
        <button onClick={() => setBad((prevBad) => prevBad + 1)}>bad</button>

        {all > 0 ? (
          <td>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              all={all}
              average={average}
            />
          </td>
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    </>
  );
}
