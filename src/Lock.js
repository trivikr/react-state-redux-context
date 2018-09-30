import React, { Component } from "react";
import "./Lock.css";

const LockIcon = ({ locked, onClickUpdateState }) => (
  <span
    className="lockIcon"
    role="img"
    aria-label="locked"
    onClick={() => onClickUpdateState(!locked)}
  >
    {locked ? "🔒" : "🔓"}
  </span>
);

class Lock extends Component {
  state = {
    locked: true
  };
  render() {
    return (
      <div className="lockIconContainer">
        <LockIcon
          locked={this.state.locked}
          onClickUpdateState={locked => this.setState({ locked })}
        />
      </div>
    );
  }
}

export default Lock;
