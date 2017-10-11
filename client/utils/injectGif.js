import { createDomNode, getElement } from './elements';
import UIStore from '@stores/UIStore';

export default (props) => {
  const gifEl = createDomNode(`
    <div twiphy-injected-gif>
      <div twiphy-gif-info>
        <small>${props.user} sent a gif</small>
        <small>12-20-1993</small>
      </div>
      <img src='${props.src}' alt='Twiphy Gif Message'/>
    </div>
  `)

  const shouldSync = !getElement('.more-messages-indicator.visible.js-chat-more-messages');
  const room = document.querySelector('.scroll.chat-messages.js-chat-messages > .tse-scroll-content > .tse-content .chat-display ul');
  const scrollRoom = getElement('.scroll.chat-messages.js-chat-messages > .tse-scroll-content');

  room.innerHTML += `
    <div twiphy-injected-gif>
      <div twiphy-gif-info>
        <small>${props.user} sent a gif</small>
        <small>12-20-1993</small>
      </div>
      <img src='${props.src}' alt='Twiphy Gif Message'/>
    </div>
  `;

  // console.log(UIStore.chatRoom);

  shouldSync && (scrollRoom.scrollTop = 99999);


  // room.lastChild.insertBefore(gifEl, room.lastChild.nextSibling);
}
