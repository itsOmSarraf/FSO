// import React from "react";
import Header from "./components/header";
import Course from "./components/course";

export default function App() {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          details: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          details: 7,
          id: 2,
        },
        {
          name: "State of a component",
          details: 14,
          id: 3,
        },
        {
          name: "Redux",
          details: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          details: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          details: 7,
          id: 2,
        },
      ],
    },
  ];

  const renderCourses = courses.map((course) => {
    const courseHeader = <Header key={course.id} course={course.name} />;
    const courseDetails = course.parts.map((part) => (
      <Course key={part.id} course={part.name} count={part.details} />
    ));
    return (
      <div key={course.id}>
        {courseHeader}
        {courseDetails}
      </div>
    );
  });

  return <div>{renderCourses}</div>;
}
