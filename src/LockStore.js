import { action, observable } from "mobx";

class LockStore {
  @observable
  locked = true;

  @action
  toggle = () => {
    this.locked = !this.locked;
  };
}

export default LockStore;
