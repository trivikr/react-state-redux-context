import React from "react";
import "./css/Smiley.css";

const smiley = ({ locked }) => (
  <span
    className="smileyIcon"
    role="img"
    aria-label={`${locked ? "happy" : "sad"}`}
  >
    {locked ? "😊" : "😟"}
  </span>
);

export default smiley;
