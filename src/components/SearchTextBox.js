import React from "react";
import "./SeachTextBox.css";

export default function SeachTextBox({ query, onQueryUpdate }) {
  return (
    <input
      className="searchTextBox"
      value={query}
      onChange={event => onQueryUpdate(event.target.value)}
    />
  );
}
