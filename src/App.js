import React, { Component } from "react";
import LockStore from "./LockStore";
import "./css/App.css";
import Lock from "./Lock";
import Smiley from "./Smiley";

class App extends Component {
  render() {
    return (
      <LockStore.Container>
        <div className="App">
          <div className="iconContainer">
            <Lock />
          </div>
          <div className="iconContainer">
            <Smiley />
          </div>
        </div>
      </LockStore.Container>
    );
  }
}

export default App;
