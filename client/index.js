import 'regenerator-runtime/runtime';
import DevTools, { configureDevtool } from 'mobx-devtools';
import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import { createDomNode, getElement } from './utils';
import waitForElement from 'wait-for-element';
import { log } from './utils/global/log';
import Frame from './Frame';
import UIStore from './domain/UIStore';
import './styles/index.css';
import { observer } from 'mobx-react';
import { observable, autorun } from 'mobx';

waitForElement('div.chat-buttons-container').then(settingsContainer => {
  settingsContainer.prepend(createDomNode(`
    <span twiphy-toggler>
      <img src="https://cdn.rawgit.com/colshacol/foreign-storage/b35a38f2/images/text-editor%20(1).png"/>
    </span>
  `));

  const chatContainer = document.querySelector('#right_col.column');
  chatContainer.prepend(createDomNode('<div twiphy-mount-point></div>'));

  UIStore.set('chatContainer', chatContainer);
  UIStore.set('mountPoint', chatContainer.querySelector('#right_col.column div[twiphy-mount-point]'));
  UIStore.set('chatInputBox', document.querySelector('div.js-chat-buttons.chat-buttons-container.clearfix > button'));
  UIStore.set('chatInputBox', document.querySelector('textarea.chat_text_input[placeholder="Send a message"]'));
  UIStore.set('toggler', document.querySelector('span[twiphy-toggler]'));

  autorun(() => {
    UIStore.mountPoint.style.left = UIStore.twiphyVisibility ? '0%' : '100%';
    UIStore.mountPoint.style.opacity = UIStore.twiphyVisibility ? '1' : '0';
  });

  const App = observer((props) => <Frame {...props} />);

  ReactDOM.render(<App toggle={UIStore.toggleTwiphy} visible={UIStore.twiphyVisibility}/>, UIStore.mountPoint);
  UIStore.toggler.addEventListener('click', UIStore.toggleTwiphy);

});
