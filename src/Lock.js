import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "./LockStore";
import "./css/Lock.css";

const Lock = ({ locked, dispatch }) => (
  <span
    className="lockIcon"
    role="img"
    aria-label={`${locked ? "" : "un"}locked`}
    onClick={() => dispatch({ type: "TOGGLE" })}
  >
    {locked ? "🔒" : "🔓"}
  </span>
);

export default connect(mapStateToProps)(Lock);
