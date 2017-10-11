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
    const chatContainer = getElement('#right_col.column');
    chatContainer.prepend(createDomNode('<div twiphy-mount-point></div>'));
    
    this.setElement('chatInputBox', getElement('textarea.chat_text_input[placeholder="Send a message"]'));
    this.setElement('mountPoint', getElement('#right_col.column div[twiphy-mount-point]'));
    this.setElement('chatRoom', getElement('.scroll.chat-messages.js-chat-messages'));
    this.setElement('toggler', getElement('span[twiphy-toggler]'));
    this.setElement('chatContainer', chatContainer);

    this.setElement('streamer', window.location.pathname.match(/^\/(\w+)/)[1]);
    this.setElement('user', document.querySelector('#user_display_name').innerText);
  }

  setElement = (name, value) => {
    this[name] = value;
  }
}

export default UIStore;
