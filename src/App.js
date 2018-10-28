import React, { useState } from "react";
import "./css/App.css";
import Lock from "./Lock";
import Smiley from "./Smiley";

const App = () => {
  const [locked, setLocked] = useState(true);
  return (
    <div className="App">
      <div className="iconContainer">
        <Lock locked={locked} toggle={() => setLocked(!locked)} />
      </div>
      <div className="iconContainer">
        <Smiley locked={locked} />
      </div>
    </div>
  );
};

export default App;
