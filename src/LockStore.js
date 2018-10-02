import { createStore } from "redux";

const mapStateToProps = state => ({
  locked: state.locked
});

const reducer = (state = { locked: true }, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        locked: !state.locked
      };
    default:
      return state;
  }
};
const LockStore = createStore(reducer);

export { LockStore, mapStateToProps };
