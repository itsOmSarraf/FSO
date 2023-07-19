const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };
  const Content = (props) => {
    return (
      <div>
        <p>
          {props.parts[0].part} {props.exercises}
        </p>
        <p>
          {props.parts[1].part} {props.exercises}
        </p>
        <p>
          {props.parts[2].part} {props.exercises}
        </p>
      </div>
    );
  };
  const Total = (props) => {
    return (
      <div>
        <p>
          Number of exercises{" "}
          {props[0].exercises + props[1].exercises + props[2].exercises}
        </p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content
        part1={parts[0].part}
        exercises1={parts[0].exercises}
        part2={parts[1].part}
        exercises2={parts[1].exercises}
        part3={parts[2].part}
        exercises3={parts[2].exercises}
      />
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </div>
  );
};

export default App;
