import 'regenerator-runtime/runtime';
import React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import { createDomNode, getElement } from './utils';
import waitForElement from 'wait-for-element';
import Frame from './Frame';
import UIStore from './domain/UIStore';
import './styles/index.css';
import { autorun } from 'mobx';
const containerQueries = require('cq-prolyfill')();

waitForElement('div.chat-buttons-container').then(settingsContainer => {
  settingsContainer.prepend(createDomNode(`
    <span twiphy-toggler>
      <img src="http://bit.ly/2uVs5wF"/>
    </span>
  `));

  const chatContainer = getElement('#right_col.column');
  chatContainer.prepend(createDomNode('<div twiphy-mount-point></div>'));

  UIStore.set('chatContainer', chatContainer);
  UIStore.set('mountPoint', getElement('#right_col.column div[twiphy-mount-point]'));
  UIStore.set('chatInputBox', getElement('div.js-chat-buttons.chat-buttons-container.clearfix > button'));
  UIStore.set('chatInputBox', getElement('textarea.chat_text_input[placeholder="Send a message"]'));
  UIStore.set('toggler', getElement('span[twiphy-toggler]'));

  autorun(() => {
    UIStore.mountPoint.style.left = UIStore.twiphyVisibility ? '0%' : '100%';
    UIStore.mountPoint.style.opacity = UIStore.twiphyVisibility ? '1' : '0';
  });

  ReactDOM.render(
    <Frame
      toggle={UIStore.toggleTwiphy}
      visible={UIStore.twiphyVisibility}
    />,
    UIStore.mountPoint
  );

  UIStore.toggler.addEventListener('click', UIStore.toggleTwiphy);
});
