import React, { Component } from "react";
import SearchTextBox from "./SearchTextBox";
import "./MovieSearch.css";

export default class MovieSearch extends Component {
  state = {
    query: ""
  };

  onQueryUpdate = query => this.setState({ query });
  render() {
    const state = this.state;
    return (
      <div className="movieSearch">
        <div className="movieSearchToolbar">
          Movie Search
          <SearchTextBox
            query={state.query}
            onQueryUpdate={this.onQueryUpdate}
          />
        </div>
      </div>
    );
  }
}
