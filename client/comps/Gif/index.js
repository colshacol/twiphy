import React from 'react';
import './styles.css';

type Props = {
  longID?: string,
  shortID?: string,
  src?: string,
  num?: number,
}

const Gif = (props: Props) => {
  return (
    <div styleName='Gif'>
        <img styleName='image' src={props.src} alt='Twiphy Gif' />
        <div styleName='actions'>
          <button>Bookmark</button>
          <button>Send</button>
        </div>
    </div>
  );
};

export default Gif;
