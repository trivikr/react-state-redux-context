import React, { Component } from "react";
import "./css/App.css";
import Lock from "./Lock";
import Smiley from "./Smiley";

const LockContext = React.createContext({
  locked: true,
  toggle: () => {}
});

class App extends Component {
  state = {
    locked: true
  };

  render() {
    return (
      <LockContext.Provider
        value={{
          locked: this.state.locked,
          toggle: locked => this.setState({ locked })
        }}
      >
        <div className="App">
          <div className="iconContainer">
            <LockContext.Consumer>
              {({ locked, toggle }) => (
                <Lock locked={locked} onClickUpdateState={toggle} />
              )}
            </LockContext.Consumer>
          </div>
          <div className="iconContainer">
            <LockContext.Consumer>
              {({ locked }) => <Smiley locked={locked} />}
            </LockContext.Consumer>
          </div>
        </div>
      </LockContext.Provider>
    );
  }
}

export default App;
