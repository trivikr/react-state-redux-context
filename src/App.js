import React, { Component } from "react";
import "./css/App.css";
import Lock from "./Lock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="iconContainer">
          <Lock />
        </div>
      </div>
    );
  }
}

export default App;
