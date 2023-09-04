import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Exercise1 from "./views/Exercise1";
import Home from "./views/Home";
import Exercise2 from "./views/Exercise2";
import Exercise3 from "./views/Exercise3";
import Exercise4 from "./views/Exercise4";
import Exercise5 from "./views/Exercise5";
import Exercise6 from "./views/Exercise6";
import Exercise7 from "./views/Exercise7";
import Exercise8 from "./views/Exercise8";
import Exercise9 from "./views/Exercise9";
import Exercise10 from "./views/Exercise10";

function App() {
  
  return (
    <div className="App">
      <Routes>
           <Route path="/" element={<Home />} />
        <Route path="/exercise-1" element={<Exercise1 />} />
        <Route path="/exercise-2" element={<Exercise2 />} />
        <Route path="/exercise-3" element={<Exercise3 />} />
        <Route path="/exercise-4" element={<Exercise4 />} />
        <Route path="/exercise-5" element={<Exercise5 />} />
        <Route path="/exercise-6" element={<Exercise6 />} />
        <Route path="/exercise-7" element={<Exercise7 />} />
        <Route path="/exercise-8" element={<Exercise8 />} />
        <Route path="/exercise-9" element={<Exercise9 />} />
        <Route path="/exercise-10" element={<Exercise10 />} />
        
      </Routes>
    </div>
  );
}

export default App;
