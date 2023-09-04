import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Exercise1 from "./views/Exercise1";
import Home from "./views/Home";

function App() {
  
  return (
    <div className="App">
      <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/exercise-1" element={<Exercise1 />} />
      </Routes>
    </div>
  );
}

export default App;
