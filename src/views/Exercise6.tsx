import { Link } from "react-router-dom";
import "../App.css";
import React, { useState } from "react";

export default function Exercise6() {
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  function handleInput1(e: React.ChangeEvent<HTMLInputElement>) {
    setNumber1(parseInt(e.target.value));
  }
  function handleInput2(e: React.ChangeEvent<HTMLInputElement>) {
    setNumber2(parseInt(e.target.value));
  }
  function handleClick() {
    setTotal(number1 + number2);
  }
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h3 className="App-header">
        Exercise 6 - Make a calculator to sum two numbers
      </h3>
      <p className="ex-header">Demo:</p>
      <div className="imp">
        <input placeholder="First Number" onChange={handleInput1} />
        <input placeholder="Second Number" onChange={handleInput2} />
        <button onClick={handleClick}>Sum Two Numbers</button>
        <p>Total: {total}</p>
      </div>
      <hr className="line" />
      <div>
        <p className="ex-header">Code:</p>
        <div className="code-box">
          <code>
            {`export function App() {`}
            <br />
            {`const [number1, setNumber1] = useState<number>(0);`}
            <br />
            {`const [number2, setNumber2] = useState<number>(0);`}
            <br />
            {`const [total, setTotal] = useState<number>(0);`}
            <br />
            {``}
            <br />
            {`function handleInput1(e) {`}
            <br />
            {`setNumber1(parseInt(e.target.value))`}
            <br />
            {`}`}
            <br />
            {`function handleInput2(e) {`}
            <br />
            {`setNumber2(parseInt(e.target.value))`}
            <br />
            {`}`}
            <br />
            {`function handleClick() {`}
            <br />
            {`setTotal(number1+number2)`}
            <br />
            {`}`}
            <br />
            {``}
            <br />
            {`return (`}
            <br />
            {`<>`}
            <br />
            {`<input placeholder="First Number" onChange={handleInput1}/>`}
            <br />
            {`<input placeholder="Second Number" onChange={handleInput2}/>`}
            <br />
            {`<button onClick={handleClick}>Add Two Numbers</button>`}
            <br />
            {`<p>Total: {total}</p>`}
            <br />
            {`</> );`}
            <br />
            {`}`}
            <br />
          </code>
        </div>
      </div>
    </div>
  );
}
