import { createDomNode, getElement } from './elements';

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

  const room = getElement('.tw-full-height.tw-flex-grow-1.tw-pd-b-1');
  const shouldSync = !getElement((window.location.href.includes('go.twitch.tv')) ? '.chat-list__more-messages' : '.more-messages-indicator.visible.js-chat-more-messages');
  // const room = document.querySelector(window.location.href.includes('go.twitch.tv') ? '.chat-list__lines' : '.scroll.chat-messages.js-chat-messages > .tse-scroll-content > .tse-content .chat-display ul');
  const scrollRoom = getElement((window.location.href.includes('go.twitch.tv')) ? '.chat-list' : '.scroll.chat-messages.js-chat-messages > .tse-scroll-content');

  console.warn({ shouldSync, room, scrollRoom })
  room.innerHTML += `
    <div twiphy-injected-gif>
      <div twiphy-gif-info>
        <small>${props.user} sent a gif</small>
        <small>12-20-1993</small>
      </div>
      <img src='${props.src}' alt='Twiphy Gif Message'/>
    </div>
  `;

  shouldSync && (room.scrollTop = 99999);
}
