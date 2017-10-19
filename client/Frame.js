import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, Provider, inject } from 'mobx-react';
import { TopBar, SearchBar, GifResults } from './comps';
import { getGifs } from './utils/api';

type Props = {
	children: any,
	visible: boolean,
	toggle: Function
};

@inject('store')
@observer
export default class Frame extends Component<void, Props, void> {
	render({ props, state } = this) {
    const { routeStore } = props;
    console.log(routeStore);
    return (
			<div className="twiphy-frame">
				<TopBar handleClose={props.store.toggle} />
				<SearchBar value={props.store.searchValue} onChange={props.store.setSearchValue} />
				<GifResults results={props.store.searchResults} sendGif={props.store.sendGif} />
				{props.children}
			</div>
		);
	}
}
