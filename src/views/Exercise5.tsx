import { Link } from "react-router-dom";
import "../App.css";
import React, { useState } from "react";
import { Exercise5Child } from "../components/Exercise5Child";

export default function Exercise5() {
  const [value, setValue] = useState<string>(
    "I need to be updated from my child"
  );

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h3 className="App-header">Exercise 5 - Update the parent string</h3>
      <p className="ex-header">Demo:</p>
      <div className="imp">
        <div>{value}</div>
        <br />
        <Exercise5Child setValue={setValue} />
      </div>
      <hr className="line" />
      <div>
        <p className="ex-header">Code:</p>
        <div className="code-box">
          <code>
            {`export function App(){`}
            <br />
            {``}
            <br />
            {`const [value, setValue] = useState<string>("I need to be updated from my child");`}
            <br />
            {``}
            <br />
            {`return (`}
            <br />
            {`<>`}
            <br />
            {`<div>{value}</div>`}
            <br />
            {``}
            <br />
            {`<ChildComponent setValue={setValue}/>`}
            <br />
            {`</> );`}
            <br />
            {`}`}
            <br />
            {``}
            <br />
            {`Child file:`}
            <br />
            {``}
            <br />
            {`import React from 'react';`}
            <br />
            {``}
            <br />
            {`interface ChildProps {`}
            <br />
            {`setValue: (value: string) => void`}
            <br />
            {`}`}
            <br />
            {``}
            <br />
            {`export function ChildComponent({setValue}: ChildProps) {`}
            <br />
            {`function changeString(){`}
            <br />
            {`setValue("I was updated!")`}
            <br />
            {`}`}
            <br />
            {`return (`}
            <br />
            {`<>`}
            <br />
            {`<button onClick={changeString}>Change Parent Value</button>`}
            <br />
            {`</> );`}
            <br />
            {`}`}
          </code>
        </div>
      </div>
    </div>
  );
}
