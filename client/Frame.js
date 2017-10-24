import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, Provider, inject } from 'mobx-react';
import { TopBar, SearchBar, GifResults, Settings } from './comps';
import { ROUTES } from '@consts/routes';
import { getGifs } from './utils/api';

type Props = {
	children: any,
	visible: boolean,
	toggle: Function
};

@inject('store', 'settingsStore', 'routeStore')
@observer
export default class Frame extends Component<void, Props, void> {
	render({ props, state } = this) {
    const { routeStore, settingsStore } = props;
    return (
			<div className="twiphy-frame">
				<TopBar handleClose={props.store.toggle} setRoute={routeStore.setRoute} />
        <If condition={routeStore.currentRoute === ROUTES.SEARCH}>
				  <SearchBar value={props.store.searchValue} onChange={props.store.setSearchValue}/>
				  <GifResults results={props.store.searchResults} sendGif={props.store.sendGif} />
        </If>
        <If condition={routeStore.currentRoute === ROUTES.SETTINGS}>
				  <Settings
            currentSettings={settingsStore.currentSettings}
          />
        </If>
				{props.children}
			</div>
		);
	}
}
