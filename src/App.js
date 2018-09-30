import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieSearch from "./components/MovieSearch";

export default function App() {
  return (
    <Router>
      <Route exact={true} path="/" component={MovieSearch} />
    </Router>
  );
}
