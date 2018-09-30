import React, { Component } from "react";
import "./css/Lock.css";

class Lock extends Component {
  render() {
    const { locked, onClickUpdateState } = this.props;
    return (
      <span
        className="lockIcon"
        role="img"
        aria-label={`${locked ? "" : "un"}locked`}
        onClick={() => onClickUpdateState(!locked)}
      >
        {locked ? "🔒" : "🔓"}
      </span>
    );
  }
}

export default Lock;
