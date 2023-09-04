import { Link } from "react-router-dom";
import "../App.css";
import React, { useEffect, useState } from "react";

export default function Exercise4() {
  interface Character {
    id: number;
    name: string;
  }

  const [data, setData] = useState<Character[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const responseData = await response.json();
      setData(responseData.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h3 className="App-header">Exercise 4 - Fetch an API and show data</h3>
      <p className="ex-header">Demo:</p>
      <div className="imp">
        <div>
          <h3>Data</h3>
          <ul>
            {data.map((item) => (
              <li key={item.id} id="list">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
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
            {`interface Character {`}
            <br />
            {`id: number;`}
            <br />
            {`name: string;`}
            <br />
            {`}`}
            <br />
            {``}
            <br />
            {`const [data, setData] = useState<Character[]>([]);`}
            <br />
            {``}
            <br />
            {`useEffect(() => {`}
            <br />
            {`fetchData();`}
            <br />
            {`}, []);`}
            <br />
            {``}
            <br />
            {`const fetchData = async () => {`}
            <br />
            {`try {`}
            <br />
            {`const response = await fetch('https://rickandmortyapi.com/api/character');`}
            <br />
            {`const responseData = await response.json();`}
            <br />
            {`setData(responseData.results);`}
            <br />
            {`} catch (error) {`}
            <br />
            {`console.log('Error:', error);`}
            <br />
            {`}};`}
            <br />
            {``}
            <br />
            {`console.log(data)`}
            <br />
            {``}
            <br />
            {`return (`}
            <br />
            {`<div>`}
            <br />
            {`<h2>Data</h2>`}
            <br />
            {`<ul>`}
            <br />
            {`{data.map((item) => (`}
            <br />
            {`<li key={item.id} id="list">{item.name}</li>`}
            <br />
            {`))}`}
            <br />
            {`</ul>`}
            <br />
            {`</div>`}
            <br />
            {`);`}
            <br />
            {`}`}
          </code>
        </div>
      </div>
    </div>
  );
}
