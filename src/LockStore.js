import { action, observable } from "mobx";

const LockStore = observable({ locked: true });
LockStore.toggle = action(function() {
  LockStore.locked = !LockStore.locked;
});

export default LockStore;
