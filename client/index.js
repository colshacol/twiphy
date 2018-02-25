import 'regenerator-runtime/runtime';
import React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import waitForElement from 'wait-for-element';
import Frame from './Frame';
import UIStore from '@stores/UIStore';
import './styles/index.css';
import { autorun } from 'mobx';
// const containerQueries = require('cq-prolyfill')();
import Firebase from './firebase';
import MainStore from './MainStore';
import { createDomNode, getElement } from '@utils';


// const rootSelector = (window.location.href.includes('go.twitch.tv'))
//   ? '.chat-line__status'
//   : '.scroll.chat-messages.js-chat-messages'

const rootSelector = "div.simplebar-scroll-content > div > div > div.chat-line__status";
const buttonContainer = ".chat-input__buttons-container.tw-flex.tw-justify-content-between.tw-mg-t-1 > .tw-flex-row";

waitForElement(rootSelector).then(chatRoom => {
  getElement(buttonContainer).append(
    createDomNode(`
      <span twiphy-toggler>
        <img src="http://bit.ly/2uVs5wF"/>
      </span>
    `)
  );

  const uiStore = new UIStore;
  uiStore.init();

  autorun(() => {
    uiStore.mountPoint.style.left = uiStore.twiphyVisible ? '0%' : '100%';
    uiStore.mountPoint.style.opacity = uiStore.twiphyVisible ? '1' : '0';
  });

  ReactDOM.render(
    <Provider store={new MainStore(uiStore)} uiStore={uiStore}>
      <Frame toggle={uiStore.toggleTwiphy} visible={uiStore.twiphyVisible} />
    </Provider>,
    uiStore.mountPoint,
  );

  uiStore.toggler.addEventListener('click', uiStore.toggleTwiphy);
});
