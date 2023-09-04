import { Link } from "react-router-dom";
import "../App.css";
import React, { useState } from "react";

export default function Exercise2() {
  const [isOn, setIsOn] = useState<boolean>(false);

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h3 className="App-header">
        Exercise 2 - Create a toggle to show `On´ and `Off´ text
      </h3>
      <p className="ex-header">Demo:</p>
      <div className="imp">
        <button onClick={handleClick}>Toggle</button>
        {isOn ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}
      </div>
      <hr className="line" />
      <div>
        <p className="ex-header">Code:</p>
        <div className="code-box">
          <code>
            {`export function App() {`}
            <br />
            {`const [isOn, setIsOn] = useState<boolean>(false)`}
            <br />
            {``}
            <br />
            {`function handleClick() {`}
            <br />
            {`setIsOn(!isOn);`}
            <br />
            {`}`}
            <br />
            {``}
            <br />
            {`return (`}
            <br />
            {`<>`}
            <br />
            {`<button onClick={handleClick}>Toggle</button>`}
            <br />
            {`{isOn? (`}
            <br />
            {`<p>Toggle is ON</p>`}
            <br />
            {`) : (`}
            <br />
            {`<p>Toggle is OFF</p>`}
            <br />
            {`)}`}
            <br />
            {`</>`}
            <br />
            {`)}`}
            <br />
          </code>
        </div>
      </div>
    </div>
  );
}
