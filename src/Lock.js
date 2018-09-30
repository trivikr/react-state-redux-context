import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/Lock.css";

class Lock extends Component {
  render() {
    const { locked } = this.props;
    return (
      <span
        className="lockIcon"
        role="img"
        aria-label={`${locked ? "" : "un"}locked`}
        onClick={() => this.props.dispatch({ type: "TOGGLE" })}
      >
        {locked ? "🔒" : "🔓"}
      </span>
    );
  }
}

const mapStateToProps = state => ({
  locked: state.locked
});
export default connect(mapStateToProps)(Lock);
