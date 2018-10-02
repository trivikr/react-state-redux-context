import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "./LockStore";
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

export default connect(mapStateToProps)(smiley);
