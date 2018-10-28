import React from "react";
import "./css/Lock.css";

const Lock = ({ locked, toggle }) => (
  <span
    className="lockIcon"
    role="img"
    aria-label={`${locked ? "" : "un"}locked`}
    onClick={toggle}
  >
    {locked ? "🔒" : "🔓"}
  </span>
);

export default Lock;
