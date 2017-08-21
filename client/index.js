import 'regenerator-runtime/runtime';
import React from 'react';
import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import { createDomNode, getElement } from './utils';
import waitForElement from 'wait-for-element';
import Frame from './Frame';
import UIStore from '@stores/UIStore';
import './styles/index.css';
import { autorun } from 'mobx';
// const containerQueries = require('cq-prolyfill')();
import Firebase from './firebase';


waitForElement('.scroll.chat-messages.js-chat-messages.hideTimestamps.hideModIcons.showAutoModActions').then(chatRoom => {
	getElement('div.chat-buttons-container').prepend(
		createDomNode(`
    <span twiphy-toggler>
      <img src="http://bit.ly/2uVs5wF"/>
    </span>
  `),
	);

	const chatContainer = getElement('#right_col.column');
	chatContainer.prepend(createDomNode('<div twiphy-mount-point></div>'));

	// TODO: Place inside UIStore method/constructor.
	UIStore.set('chatContainer', chatContainer);
  UIStore.set('mountPoint', getElement('#right_col.column div[twiphy-mount-point]'));
  UIStore.set('chatRoom', chatRoom);
	UIStore.set(
		'chatInputBox',
		getElement('div.js-chat-buttons.chat-buttons-container.clearfix > button'),
	);
	UIStore.set('chatInputBox', getElement('textarea.chat_text_input[placeholder="Send a message"]'));
  UIStore.set('toggler', getElement('span[twiphy-toggler]'));
  UIStore.set('streamer', window.location.pathname.match(/^\/(\w+)/)[1]);
  UIStore.set('user', document.querySelector('#user_display_name').innerText);

	autorun(() => {
		UIStore.mountPoint.style.left = UIStore.twiphyVisibility ? '0%' : '100%';
		UIStore.mountPoint.style.opacity = UIStore.twiphyVisibility ? '1' : '0';
	});

  ReactDOM.render(
    <Provider gifStore={Firebase} uiStore={UIStore}>
      <Frame toggle={UIStore.toggleTwiphy} visible={UIStore.twiphyVisibility} />
    </Provider>,
		UIStore.mountPoint,
	);

  UIStore.toggler.addEventListener('click', UIStore.toggleTwiphy);
});
