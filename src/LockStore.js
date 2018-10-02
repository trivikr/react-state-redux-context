import React from "react";

const LockContext = React.createContext({
  locked: true,
  toggle: () => {}
});

class LockStore extends React.Component {
  state = {
    locked: true
  };

  render() {
    const { locked } = this.state;
    return (
      <LockContext.Provider
        value={{
          locked,
          toggle: () => this.setState({ locked: !locked })
        }}
      >
        {this.props.children}
      </LockContext.Provider>
    );
  }
}

export { LockContext, LockStore };
