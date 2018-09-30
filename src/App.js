import React, { Component } from "react";
import "./css/App.css";
import Lock from "./Lock";
import Smiley from "./Smiley";
import { createStore } from "redux";
import { Provider } from "react-redux";

const reducer = (state = { locked: true }, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        locked: !state.locked
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="iconContainer">
            <Lock />
          </div>
          <div className="iconContainer">
            <Smiley />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
