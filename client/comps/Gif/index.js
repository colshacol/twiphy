import React from 'react';
import './styles.css';

type Props = {
  longID?: string,
  shortID?: string,
  src?: string,
  num?: number,
}

export default (props: Props) => {
  // const submitButton = document.querySelector('div.js-chat-buttons.chat-buttons-container.clearfix > button');
  const newButton = window.chatSubmitButton.cloneNode(true);
  newButton.innerText = 'Send';
  newButton.style.position = 'absolute';
  newButton.style.right = '16px';
  newButton.style.bottom = '16px';

  return (
    <div styleName='Gif' style={{position: 'relative'}} onMouseDown={(e) => { if (e.target == newButton) {props.selectGif(props.src)}}} onMouseUp={(e) => { if (e.target == newButton) { props.sendGif() }; props.selectGif(props.src)}}>
      <img src={props.src} alt='Twiphy Gif'/>
      <span style={{display: 'none'}}>
        {setTimeout(() => {
          document.querySelector('img[src="' + props.src + '"][alt="Twiphy Gif"]').parentElement.appendChild(newButton)
        }, 750)}
      </span>
    </div>
  );
};
