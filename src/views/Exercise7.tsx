import { Link } from "react-router-dom";
import "../App.css";
import React, { useState } from "react";

export default function Exercise7() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const users: string[] = ["can", "sebastian", "julia", "marco", "lisa"];

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  const filteredUsers: string[] = users.filter((user) =>
    user.includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <h3 className="App-header">
        Exercise 7 - Search a name in an array and show it
      </h3>
      <p className="ex-header">Demo:</p>
      <div className="imp">
        <input type="text" onChange={handleChange}></input>
        {filteredUsers.length === 0 ? (
          <p>No users found!</p>
        ) : (
          <ul>
            {filteredUsers.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        )}
      </div>
      <hr className="line" />
      <div>
        <p className="ex-header">Code:</p>
        <div className="code-box">
          <code>
            {`export function App() {`}
            <br />
            {`const [searchQuery, setSearchQuery] = useState<string>("")`}
            <br />
            {`const users:string[] = ["can", "sebastian", "julia", "marco", "lisa"]`}
            <br />
            {``}
            <br />
            {`function handleChange(e) {`}
            <br />
            {`setSearchQuery(e.target.value);`}
            <br />
            {`};`}
            <br />
            {``}
            <br />
            {`const filteredUsers: string[] = users.filter(user =>`}
            <br />
            {`user.includes(searchQuery.toLowerCase())`}
            <br />
            {`);`}
            <br />
            {``}
            <br />
            {`console.log(filteredUsers)`}
            <br />
            {`return (`}
            <br />
            {`<>`}
            <br />
            {`<input type="text" onChange={handleChange}></input>`}
            <br />
            {`{filteredUsers.length === 0? (`}
            <br />
            {`<p>"No users found!"</p>`}
            <br />
            {`) : (`}
            <br />
            {`<ul>`}
            <br />
            {`{filteredUsers.map((user, index) =>`}
            <br />
            {`<li key={index}>{user}</li>)}`}
            <br />
            {`</ul>`}
            <br />
            {`)}`}
            <br />
            {`</>)`}
            <br />
            {`}`}
            <br />
          </code>
        </div>
      </div>
    </div>
  );
}
