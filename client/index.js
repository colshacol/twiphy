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
import { createDomNode, getElement } from '@utils';


waitForElement('.scroll.chat-messages.js-chat-messages').then(chatRoom => {
	getElement('div.chat-buttons-container').prepend(
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
    <Provider gifStore={Firebase} uiStore={uiStore}>
      <Frame toggle={uiStore.toggleTwiphy} visible={uiStore.twiphyVisible} />
    </Provider>,
		uiStore.mountPoint,
	);

  uiStore.toggler.addEventListener('click', uiStore.toggleTwiphy);
});
