import React, { Component } from "react";
import "./css/App.css";
import Lock from "./Lock";
import Smiley from "./Smiley";

class App extends Component {
  state = {
    locked: true
  };

  render() {
    const { locked } = this.state;
    return (
      <div className="App">
        <div className="iconContainer">
          <Lock
            locked={locked}
            toggle={() => this.setState({ locked: !locked })}
          />
        </div>
        <div className="iconContainer">
          <Smiley locked={locked} />
        </div>
      </div>
    );
  }
}

export default App;
