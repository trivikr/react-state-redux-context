import React from "react";
import "./css/Smiley.css";
import LockContext from "./LockContext";

const smiley = () => (
  <LockContext.Consumer>
    {({ locked }) => (
      <span
        className="smileyIcon"
        role="img"
        aria-label={`${locked ? "happy" : "sad"}`}
      >
        {locked ? "😊" : "😟"}
      </span>
    )}
  </LockContext.Consumer>
);

export default smiley;
