import React, { Component } from "react";
import "./css/Lock.css";
import { LockContext } from "./LockStore";

class Lock extends Component {
  render() {
    return (
      <LockContext.Consumer>
        {({ locked, toggle }) => (
          <span
            className="lockIcon"
            role="img"
            aria-label={`${locked ? "" : "un"}locked`}
            onClick={toggle}
          >
            {locked ? "🔒" : "🔓"}
          </span>
        )}
      </LockContext.Consumer>
    );
  }
}

export default Lock;
