import React, { Component } from "react";
import LockStore from "./LockStore";
import "./css/Lock.css";

class Lock extends Component {
  render() {
    const { store } = this.props;
    const locked = store.get("locked");
    return (
      <span
        className="lockIcon"
        role="img"
        aria-label={`${locked ? "" : "un"}locked`}
        onClick={() => {
          store.set("locked");
        }}
      >
        {locked ? "🔒" : "🔓"}
      </span>
    );
  }
}

export default LockStore.withStore(Lock);
