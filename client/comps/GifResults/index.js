import React from 'react';
import { observer } from 'mobx-react';
import { Gif } from '../';
import './styles.css';

type Props = {
  results: ObservableArray<Object>,
}

export default observer((props: Props) => {
  trace: props.results;
  return (
    <div styleName='GifResults'>
      <For each='gif' of={props.results} index='i'>
        <Gif src={gif.images.original.url} sendGif={props.sendGif} selectGif={props.selectGif}/>
      </For>
    </div>
  );
});
