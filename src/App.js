import React, { Component } from "react";
import "./css/App.css";
import Lock from "./Lock";
import Smiley from "./Smiley";
import { LockStore } from "./LockStore";

class App extends Component {
  render() {
    return (
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
  }
}

export default App;
