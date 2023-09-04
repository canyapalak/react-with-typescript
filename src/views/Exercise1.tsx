import { Link } from "react-router-dom";
import "../App.css";
import React, { useState } from "react";

export default function Exercise1() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h3 className="App-header">
        Exercise 1 - Create a button which increases the number by one
      </h3>
      <p className="ex-header">Demo:</p>
      <div className="imp">
        <button onClick={() => setCount(count + 1)} id="click-button">
          Click Me
        </button>
        <br />
        <p id="count-sentence">
          You clicked on me <p id="count-number">{count}</p> times!
        </p>
      </div>
      <hr className="line" />
      <div>
        <p className="ex-header">Code:</p>
        <div className="code-box">
          <code>
            {`export function App() {`}
            <br />
            {`const [count, setCount] = useState<number>(0)`}
            <br />
            {`return (`}
            <br />
            {`<div className="app">`}
            <br />
            {`<button onClick={() => setCount(count + 1)}`}
            <br />
            {`id="click-button">Click Me</button>`}
            <br />
            {`<br/>`}
            <br />
            {`<p id="count-sentence">You clicked on me <p id="count-number">{count}</p> times!</p>`}
            <br />
            {`</div>`}
            <br />
            {`)}`}
            <br />
          </code>
        </div>
      </div>
    </div>
  );
}
