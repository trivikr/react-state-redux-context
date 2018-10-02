import React from "react";
import "./css/App.css";
import Lock from "./Lock";
import Smiley from "./Smiley";
import { LockStore } from "./LockStore";

const App = () => (
  <LockStore>
    <div className="App">
      <div className="iconContainer">
        <Lock />
      </div>
      <div className="iconContainer">
        <Smiley />
      </div>
    </div>
  </LockStore>
);

export default App;
