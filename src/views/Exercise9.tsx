import { Link } from "react-router-dom";
import "../App.css";
import React, { useState } from "react";

export default function Exercise9() {
  const itemsArray: Item[] = [
    { id: 1, name: "Can" },
    { id: 2, name: "Sebastian" },
    { id: 3, name: "Julia" },
    { id: 4, name: "Marty" },
    { id: 5, name: "Lisa" },
  ];

  interface Item {
    id: number;
    name: string;
  }
  const [itemsList, setItemsList] = useState<Item[]>(itemsArray);

  function handleClick(id: number) {
    setItemsList(itemsList.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h3 className="App-header">
        Exercise 9 - Show a list of items with a button to remove each
      </h3>
      <p className="ex-header">Demo:</p>
      <div className="imp">
        <ul>
          {itemsList.map((item) => (
            <div className="list-item" key={item.id}>
              <button onClick={() => handleClick(item.id)}>Remove Item</button>
              <li className="list-name">{item.name}</li>
            </div>
          ))}
        </ul>
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
            {`const itemsArray: Item[] = [`}
            <br />
            {`{id: 1,`}
            <br />
            {`name: "Can"},`}
            <br />
            {`{id: 2,`}
            <br />
            {`name: "Sebastian"},`}
            <br />
            {`{id: 3,`}
            <br />
            {`name: "Julia"},`}
            <br />
            {`{id: 4,`}
            <br />
            {`name: "Marty"},`}
            <br />
            {`{id: 5,`}
            <br />
            {`name: "Lisa"},`}
            <br />
            {`]`}
            <br />
            {``}
            <br />
            {`interface Item {`}
            <br />
            {`id: number`}
            <br />
            {`name: string`}
            <br />
            {`}`}
            <br />
            {`const [itemsList, setItemsList] = useState<Item[]>(itemsArray);`}
            <br />
            {``}
            <br />
            {`function handleClick(id: number) {`}
            <br />
            {`setItemsList(itemsList.filter((item) => item.id !== id));`}
            <br />
            {`}`}
            <br />
            {``}
            <br />
            {`return (`}
            <br />
            {`<>`}
            <br />
            {`<ul>`}
            <br />
            {`{itemsList.map((item) =>`}
            <br />
            {`<div className="list-item"><li key={item.id}>{item.name}</li>`}
            <br />
            {`<button onClick={()=>handleClick(item.id)}>Remove Item</button>`}
            <br />
            {`</div>`}
            <br />
            {`)}`}
            <br />
            {`</ul>`}
            <br />
            {`</>`}
            <br />
            {`)}`}
            <br />
            <br />
          </code>
        </div>
      </div>
    </div>
  );
}
