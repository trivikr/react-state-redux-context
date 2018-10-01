import React, { Component } from "react";
import "./css/App.css";
import Lock from "./Lock";
import Smiley from "./Smiley";
import LockContext from "./LockContext";

class App extends Component {
  state = {
    locked: true
  };

  render() {
    return (
      <LockContext.Provider
        value={{
          locked: this.state.locked,
          toggle: () => this.setState({ locked: !this.state.locked })
        }}
      >
        <div className="App">
          <div className="iconContainer">
            <Lock />
          </div>
          <div className="iconContainer">
            <Smiley />
          </div>
        </div>
      </LockContext.Provider>
    );
  }
}

export default App;
