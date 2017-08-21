import { observable, action, computed, autorun } from 'mobx';

class UIStore {
  @observable twiphyVisibility: boolean = false;

  @computed get visibility() {
    this.twiphyVisibility;
  }

  @action
  toggleTwiphy = () => {
    console.log('.....----', this.twiphyVisibility ? 100 : 0);
    // this.mountPoint.style.left = this.twiphyVisibility ? '100%' : '0%';
    // this.mountPoint.style.opacity = this.twiphyVisibility ? '1' : '0.5';
    this.twiphyVisibility = !this.twiphyVisibility;
  }

  set(name, value) {
    this[name] = value;
  }
}

const store = new UIStore;

export default store;
