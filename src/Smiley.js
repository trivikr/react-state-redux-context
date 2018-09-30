import React from "react";
import { connect } from "react-redux";
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

const mapStateToProps = state => ({
  locked: state.locked
});
export default connect(mapStateToProps)(smiley);
