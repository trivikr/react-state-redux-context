import React, { Component } from "react";
import "./Lock.css";

class Lock extends Component {
  render() {
    return (
      <div className="lockIconContainer">
        <span className="lockIcon" role="img" aria-label="locked">
          🔒
        </span>
      </div>
    );
  }
}

export default Lock;
