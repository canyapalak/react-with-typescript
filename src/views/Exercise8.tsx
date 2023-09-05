import { Link } from "react-router-dom";
import "../App.css";
import React from "react";

export default function Exercise8() {
  function getEvenSum(numbers: number[]): number {
    let sum = 0;
    for (const num of numbers) {
      if (num % 2 === 0) {
        sum += num;
      }
    }
    return sum;
  }
  const numbersArray = [1, 3, 4, 6, 8, 11, 12];
  const evenNumbersSum = getEvenSum(numbersArray);

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h3 className="App-header">Exercise 8 - Sum even numbers in an array</h3>
      <p className="ex-header">Demo:</p>
      <div className="imp">
        <p>Numbers array: [1, 3, 4, 6, 8, 11, 12]</p>
        <p>The sum of even numbers are: {evenNumbersSum}</p>
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
            {`function getEvenSum(numbers:number[]): number {`}
            <br />
            {`let sum = 0`}
            <br />
            {`for (const num of numbers) {`}
            <br />
            {`if (num % 2 === 0) {`}
            <br />
            {`sum += num;`}
            <br />
            {`}}`}
            <br />
            {`return sum`}
            <br />
            {`}`}
            <br />
            {``}
            <br />
            {`const evenNumbersSum = getEvenSum([1, 3, 4, 6, 8, 10, 11, 15]);`}
            <br />
            {``}
            <br />
            {`return (`}
            <br />
            {`<>`}
            <br />
            {`<p>Numbers array: [1, 3, 4, 6, 8, 11, 12]</p>`}
            <br />
            {`<p>The sum of even numbers are: {evenNumbersSum}</p>`}
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
