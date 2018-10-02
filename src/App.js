import React, { Component } from "react";
import { action, observable } from "mobx";
import { observer } from "mobx-react";
import "./css/App.css";
import Lock from "./Lock";
import Smiley from "./Smiley";

const LockStore = observable({ locked: false });
LockStore.toggle = action(function() {
  LockStore.locked = !LockStore.locked;
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="iconContainer">
          <Lock locked={LockStore.locked} toggle={LockStore.toggle} />
        </div>
        <div className="iconContainer">
          <Smiley locked={LockStore.locked} />
        </div>
      </div>
    );
  }
}

export default observer(App);
