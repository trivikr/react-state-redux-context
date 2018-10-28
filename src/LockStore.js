import { action, configure, observable } from "mobx";

// don't allow state modifications outside actions
configure({ enforceActions: "observed" });

const LockStore = observable({ locked: true });
const toggle = () => {
  LockStore.locked = !LockStore.locked;
};
LockStore.toggle = action(toggle);

export default LockStore;
