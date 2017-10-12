import { observable, action } from 'mobx';
import Firebase from './firebase';
import { getGifs } from './utils/api';

export default class MainStore {
	@observable searchValue: string = '';
  @observable searchResults: Object[] = [];
  uiStore = null;

	constructor(uiStore) {
    this.uiStore = uiStore;
    this.userData = uiStore.user;
	}

	@action
	setSearchValue = ({ target: { value } }) => {
		this.startSearchTimeout(value);
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

	@action
	sendGif = gifData => {
		Firebase.sendGif(gifData);
		this.close();
  };

  @action
  toggle = () => {
    this.uiStore.toggleTwiphy();
  }

	@action
	close = () => {
		this.uiStore.toggleTwiphy();
		this.resetState();
	};

	startSearchTimeout = ((timeout = null) => (value: string) => {
		timeout && clearTimeout(timeout);
		timeout = setTimeout(async () => {
			const gifs = await getGifs({ query: value });
			this.setSearchResults(gifs);
		}, 750);
	})();
}
