import React, { Component } from "react";
import "./css/Lock.css";

class Lock extends Component {
  render() {
    const { locked, toggle } = this.props;
    return (
      <span
        className="lockIcon"
        role="img"
        aria-label={`${locked ? "" : "un"}locked`}
        onClick={toggle}
      >
        {locked ? "🔒" : "🔓"}
      </span>
    );
  }
}

export default Lock;
