import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, Provider } from 'mobx-react';
import { TopBar, SearchBar, GifResults } from './comps';
import { getGifs } from './utils/api';
import UIStore from './domain/UIStore';

type Props = {
  children: any,
  visible: boolean,
  toggle: Function
};

@observer
export default class Frame extends Component<void, Props, void> {
  @observable searchValue: string = '';
  @observable searchResults: Object[] = [];

  @action setSearchValue = ({ target: { value }}) => {
    this.startSearchTimeout(value);
    trace: 'value', value;
    this.searchValue = value;
  };

  @action setSearchResults = (results: Array) => {
    this.searchResults = results;
  };

  @action resetState = () => {
    this.searchValue = '';
    this.searchResults = [];
    UIStore.chatInputBox.innerText = '';
  };

  selectGif = (url) => {
    insertTwiphyText(url);
  };

  sendGif = () => {
    this.close();
  };

  close = () => {
    this.resetState();
  };

  startSearchTimeout = ((timeout = null) => (value: string) => {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(async () => {
      const gifs = await getGifs({ query: value });
      this.setSearchResults(gifs);
    }, 750);
  })();

  render({ props, state } = this) {
    return (
      <div className='twiphy-frame'>
        <TopBar handleClose={props.toggle} />
        <SearchBar value={this.searchValue} onChange={this.setSearchValue} />
        <GifResults results={this.searchResults} sendGif={this.sendGif} selectGif={this.selectGif} />
        {props.children}
      </div>
    );
  };
}
