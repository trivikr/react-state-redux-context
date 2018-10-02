import { action, configure, observable } from "mobx";

// don't allow state modifications outside actions
configure({ enforceActions: "observed" });

const LockStore = observable({ locked: true });
LockStore.toggle = action(function() {
  LockStore.locked = !LockStore.locked;
});

export default LockStore;
