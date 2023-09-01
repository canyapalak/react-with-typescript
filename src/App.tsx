import { Link } from "react-router-dom";
import "./App.css";
import React from "react";

interface Exercise {
  name: string;
  src: string;
  definition: string;
}

function App() {
  const exercises: Exercise[] = [
    {
      name: "Exercise 1",
      src: "/exercise-1",
      definition: "Create a button which increases the number by one",
    },
    {
      name: "Exercise 2",
      src: "/exercise-2",
      definition: "Create a toggle to show 'On' and 'Off' text",
    },
    {
      name: "Exercise 3",
      src: "/exercise-3",
      definition: "Give a warning if an input is not minimum 6 characters",
    },
    {
      name: "Exercise 4",
      src: "/exercise-4",
      definition: "Fetch an API and show data",
    },
    {
      name: "Exercise 5",
      src: "/exercise-5",
      definition: "Update the parent string",
    },
    {
      name: "Exercise 6",
      src: "/exercise-6",
      definition: "Make a calculator to sum two numbers",
    },
    {
      name: "Exercise 7",
      src: "/exercise-7",
      definition: "Search a name in an array and show it",
    },
    {
      name: "Exercise 8",
      src: "/exercise-8",
      definition: "Sum even numbers in an array",
    },
    {
      name: "Exercise 9",
      src: "/exercise-9",
      definition: "Show a list of items with a button to remove each",
    },
    {
      name: "Exercise 10",
      src: "/exercise-10",
      definition: "Show a list of items with remove and add function ",
    },
  ];

  return (
    <div className="App">
      <h2 className="App-header">React with TypeScript - Exercises</h2>
      <div className="exercise-wrapper">
        {exercises.map((exercise) => (
          <div key={exercise.name} className="exercise">
            <p className="exercise-title">
              <Link to={exercise.src} target="_blank" rel="noopener noreferrer">
                {exercise.name}
              </Link>
            </p>
            <p className="exercise-definition">{exercise.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
