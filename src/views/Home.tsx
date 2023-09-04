import { Link } from "react-router-dom";
import "../App.css";
import React from "react";
import { exercises } from "../assets/ExerciseList"

function Home() {


  return (
    <div className="App">
      <h2 className="App-header">React with TypeScript - Exercises</h2>
      <div className="exercise-wrapper">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="exercise">
            <p className="exercise-title">
              <Link to={exercise.src} rel="noopener noreferrer">
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

export default Home;
