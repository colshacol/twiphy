import React from 'react';
import { observer } from 'mobx-react';
import { Gif } from '../';
import './styles.css';

type Props = {
  results: ObservableArray<Object>,
};

const GifResults = observer((props: Props) => {
  return (
    <div styleName='GifResults'>
      <For each='gif' of={props.results} index='i'>
        <Gif
          key={gif.images.original.url}
          src={gif.images.original.url}
          sendGif={props.sendGif}
          selectGif={props.selectGif}
        />
      </For>
    </div>
  );
});

export default GifResults;
