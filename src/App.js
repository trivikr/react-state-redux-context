import React from "react";
import "./css/App.css";
import Lock from "./Lock";
import Smiley from "./Smiley";

const App = () => (
  <div className="App">
    <div className="iconContainer">
      <Lock />
    </div>
    <div className="iconContainer">
      <Smiley />
    </div>
  </div>
);

export default App;
