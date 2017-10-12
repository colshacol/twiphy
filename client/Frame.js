import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, Provider, inject } from 'mobx-react';
import { TopBar, SearchBar, GifResults } from './comps';
import { getGifs } from './utils/api';
import UIStore from '@stores/UIStore';

type Props = {
	children: any,
	visible: boolean,
	toggle: Function
};

@inject('gifStore')
@observer
export default class Frame extends Component<void, Props, void> {
	@observable searchValue: string = '';
	@observable searchResults: Object[] = [];

	@action
	setSearchValue = ({ target: { value } }) => {
		this.startSearchTimeout(value);
		trace: 'value', value;
		this.searchValue = value;
	};

	@action
	setSearchResults = (results: Array) => {
		this.searchResults = results;
	};

	@action
	resetState = () => {
		this.searchValue = '';
		this.searchResults = [];
	};

	@action sendGif = gifData => {
		this.props.gifStore.sendGif(gifData);
		this.close();
	};

	@action close = () => {
    this.props.toggle();
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
			<div className="twiphy-frame">
				<TopBar handleClose={props.toggle} />
				<SearchBar value={this.searchValue} onChange={this.setSearchValue} />
				<GifResults results={this.searchResults} sendGif={this.sendGif} />
				{props.children}
			</div>
		);
	}
}
