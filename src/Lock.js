import React from "react";
import LockStore from "./LockStore";
import "./css/Lock.css";
import { observer } from "mobx-react";

const Lock = () => {
  const { locked, toggle } = LockStore;
  return (
    <span
      className="lockIcon"
      role="img"
      aria-label={`${locked ? "" : "un"}locked`}
      onClick={toggle}
    >
      {locked ? "🔒" : "🔓"}
    </span>
  );
};

export default observer(Lock);
