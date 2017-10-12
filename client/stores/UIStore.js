import { observable, action, computed, autorun } from 'mobx';
import { createDomNode, getElement } from '@utils';

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
    if (window.location.href.includes('go.twitch.tv')) {
      const chatContainer = getElement('.right-column');
      chatContainer.prepend(createDomNode('<div twiphy-mount-point></div>'));

      this.setElement('mountPoint', getElement('.right-column div[twiphy-mount-point]'));
      this.setElement('chatRoom', getElement('.chat-list__lines'));
      this.setElement('toggler', getElement('span[twiphy-toggler]'));
      this.setElement('chatContainer', chatContainer);

      this.setElement('streamer', window.location.pathname.match(/^\/(\w+)/)[1]);
      this.setElement('user', document.querySelector('.top-nav__username').innerText);
    } else {
      const chatContainer = getElement('#right_col.column');
      chatContainer.prepend(createDomNode('<div twiphy-mount-point></div>'));

      this.setElement('mountPoint', getElement('#right_col.column div[twiphy-mount-point]'));
      this.setElement('chatRoom', getElement('.scroll.chat-messages.js-chat-messages'));
      this.setElement('toggler', getElement('span[twiphy-toggler]'));
      this.setElement('chatContainer', chatContainer);

      this.setElement('streamer', window.location.pathname.match(/^\/(\w+)/)[1]);
      this.setElement('user', document.querySelector('#user_display_name').innerText);
    }
  }

  setElement = (name, value) => {
    this[name] = value;
  }
}

export default UIStore;
