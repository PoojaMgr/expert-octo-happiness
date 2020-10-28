import React from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Header } from "./stories/Header";

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <Header>Pooja</Header>
      <center>
        <h1>React 2.0</h1>
      </center>
    </div>
  );
}

export default App;
