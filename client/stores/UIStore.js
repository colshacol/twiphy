import { observable, action, computed, autorun } from 'mobx';
import { createDomNode, getElement } from '@utils';

// const UIStore = () => {

// }

class UIStore {
  @observable twiphyVisible: boolean = false;

  @computed get visibility() {
    this.twiphyVisible;
  }

  @action
  toggleTwiphy = () => {
    this.twiphyVisible = !this.twiphyVisible;
  }

  init = () => {
    const chatContainer = getElement('[data-a-target="right-column-chat-bar"');
    chatContainer.prepend(createDomNode('<div twiphy-mount-point></div>'));

    this.setElement('mountPoint', getElement('div[twiphy-mount-point]'));
    this.setElement('chatRoom', getElement('.scroll.chat-messages.js-chat-messages'));
    this.setElement('toggler', getElement('span[twiphy-toggler]'));
    this.setElement('chatContainer', chatContainer);

    this.setElement('streamer', window.location.pathname.match(/^\/(\w+)/)[1]);
    this.setElement('user', document.querySelector('[data-a-target="user-display-name"]').innerText);
  }

  setElement = (name, value) => {
    this[name] = value;
  }
}

export default UIStore;
