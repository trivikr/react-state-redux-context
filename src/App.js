import React from "react";
import "./css/App.css";
import Lock from "./Lock";
import Smiley from "./Smiley";
import { Provider } from "react-redux";
import { LockStore } from "./LockStore";

const App = () => (
  <Provider store={LockStore}>
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

export default App;
