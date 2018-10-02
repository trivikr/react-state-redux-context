import React from "react";
import "./Lock.css";

class Lock extends React.Component {
  state = {
    locked: true
  };
  render() {
    const { locked } = this.state;
    return (
      <span
        className="lockIcon"
        role="img"
        aria-label={`${locked ? "" : "un"}locked`}
        onClick={() => this.setState({ locked: !locked })}
      >
        {locked ? "🔒" : "🔓"}
      </span>
    );
  }
}

export default Lock;
