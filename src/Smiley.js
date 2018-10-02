import React from "react";
import LockStore from "./LockStore";
import { observer } from "mobx-react";
import "./css/Smiley.css";

const smiley = () => {
  const { locked } = LockStore;
  return (
    <span
      className="smileyIcon"
      role="img"
      aria-label={`${locked ? "happy" : "sad"}`}
    >
      {locked ? "😊" : "😟"}
    </span>
  );
};

export default observer(smiley);
