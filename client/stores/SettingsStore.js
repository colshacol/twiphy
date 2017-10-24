import { observable, action, computed, autorun } from 'mobx';

export default class SettingsStore {
  constructor() {
    autorun(() => {
      this.gifWidth;
      Array.from(document.querySelectorAll('[twiphy-injected-gif] img')).map(gif => {
        console.log({gif});
        gif.style.minWidth = this.gifWidth + '%';
        gif.style.maxWidth = this.gifWidth + '%';
      });
    })
  }

  @observable gifWidth: 90;

  @action setGifWidth = ({ target: { value } }) => {
    console.log({ value })
    this.gifWidth = value;
  }
}
