import { Link } from "react-router-dom";
import "../App.css";
import React, { useState } from "react";

export default function Exercise10() {
  const itemList: string[] = ["Can", "Sebastian", "Julia", "Marty", "Lisa"];

  const [itemsArray, setItemsArray] = useState<string[]>(itemList);
  const [textToAdd, setTextToAdd] = useState<string>("");

  function handleClickRemove(item: string) {
    const updatedItems = itemsArray.filter((i) => i !== item);
    setItemsArray(updatedItems);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextToAdd(e.target.value);
  }

  function handleClickAdd() {
    if (textToAdd !== "") {
      const updatedItems = [...itemsArray, textToAdd];
      setItemsArray(updatedItems);
      setTextToAdd("");
    }
  }
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h3 className="App-header">
        Exercise 10 - Show a list of items with remove and add function
      </h3>
      <p className="ex-header">Demo:</p>
      <div className="imp">
        <ul>
          {itemsArray.map((item, index) => (
            <div className="list-item" key={index}>
              <button onClick={() => handleClickRemove(item)}>
                Remove Item
              </button>
              <li className="list-name">{item}</li>
            </div>
          ))}
        </ul>
        <input type="text" value={textToAdd} onChange={handleChange} />
        <button onClick={handleClickAdd}>Add Item</button>
      </div>
      <hr className="line" />
      <div>
        <p className="ex-header">Code:</p>
        <div className="code-box">
          <code>
            {`export function App() {`}
            <br />
            {`const itemList: string[] = ["can", "sebastian", "julia", "mark", "lisa"];`}
            <br />
            {``}
            <br />
            {`const [itemsArray, setItemsArray] = useState<string[]>(itemList);`}
            <br />
            {`const [textToAdd, setTextToAdd] = useState<string>('');`}
            <br />
            {``}
            <br />
            {`function handleClickRemove(item: string) {`}
            <br />
            {`const updatedItems = itemsArray.filter(i => i !== item);`}
            <br />
            {`setItemsArray(updatedItems);`}
            <br />
            {`}`}
            <br />
            {``}
            <br />
            {`function handleChange(e: React.ChangeEvent<HTMLInputElement>) {`}
            <br />
            {`setTextToAdd(e.target.value);`}
            <br />
            {`}`}
            <br />
            {``}
            <br />
            {`function handleClickAdd() {`}
            <br />
            {`if (textToAdd !== '') {`}
            <br />
            {`const updatedItems = [...itemsArray, textToAdd];`}
            <br />
            {`setItemsArray(updatedItems);`}
            <br />
            {`setTextToAdd('');`}
            <br />
            {`}`}
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
            {`{itemsArray.map((item, index) => (`}
            <br />
            {`<li key={index}>`}
            <br />
            {`<p>{item}</p>`}
            <br />
            {`<button onClick={() => handleClickRemove(item)}>Remove Item</button>`}
            <br />
            {`</li>`}
            <br />
            {`))}`}
            <br />
            {`</ul>`}
            <br />
            {`<input type="text" value={textToAdd} onChange={handleChange} />`}
            <br />
            {`<button onClick={handleClickAdd}>Add Item</button>`}
            <br />
            {`</>`}
            <br />
            {`);`}
            <br />
            {`}`}
            <br />
          </code>
        </div>
      </div>
    </div>
  );
}
