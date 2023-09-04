import { Link } from "react-router-dom";
import "../App.css";
import React, { ChangeEvent, useState } from "react";

export default function Exercise3() {
  const [isValueShort, setIsValueShort] = useState<boolean>(false);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (value.length <= 5) {
      setIsValueShort(true);
    } else {
      setIsValueShort(false);
    }
  }

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h3 className="App-header">
        Exercise 3 - Give a warning if an input is not minimum 6 characters
      </h3>
      <p className="ex-header">Demo:</p>
      <div className="imp">
        <input onChange={handleInputChange}></input>
        {isValueShort && <p>Value should be minimum 6 characters</p>}
      </div>
      <hr className="line" />
      <div>
        <p className="ex-header">Code:</p>
        <div className="code-box">
          <code>
            {`export function App() {`}
            <br />
            {``}
            <br />
            {`const [isValueShort, setIsValueShort] = useState<boolean>(false);`}
            <br />
            {``}
            <br />
            {`function handleInputChange(event) {`}
            <br />
            {`const value = event.target.value;`}
            <br />
            {`if (value.length <= 5) {`}
            <br />
            {`setIsValueShort(true);`}
            <br />
            {`} else {`}
            <br />
            {`setIsValueShort(false);`}
            <br />
            {`}}`}
            <br />
            {``}
            <br />
            {`return (`}
            <br />
            {`<>`}
            <br />
            {`<input onChange={handleInputChange}></input>`}
            <br />
            {`{isValueShort && (`}
            <br />
            {`<p>Value should be minimum 6 characters</p>`}
            <br />
            {`)}`}
            <br />
            {`</>`}
            <br />
            {`)}`}
          </code>
        </div>
      </div>
    </div>
  );
}
