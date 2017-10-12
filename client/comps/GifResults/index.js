import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Gif } from '../';
import './styles.css';

type Props = {
  results: ObservableArray<Object>,
};

@observer
class GifResults extends Component {
  render() {
    const { props, state, context } = this;

    return (
      <div styleName='GifResults'>
        <For each='gif' of={props.results} index='i'>
          <Gif
            key={gif.images.original.url}
            src={gif.images.original.url}
            sendGif={props.sendGif}
          />
        </For>
      </div>
    );
  }
}

export default GifResults;
