import React from "react";
//import DevTools from "mobx-react-devtools";
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
    {/*<DevTools />*/}
  </div>
);

export default App;
