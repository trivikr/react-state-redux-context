import React, { Component } from "react";
import SearchTextBox from "./components/SearchTextBox";
import "./App.css";

class App extends Component {
  state = {
    query: ""
  };

  onQueryUpdate = query => this.setState({ query });
  render() {
    const state = this.state;
    return (
      <div className="App">
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

export default App;
