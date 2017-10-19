import { observable, action, computed } from 'mobx';
import { ROUTES } from '@consts/routes';

export default class RouteStore {
  @observable currentRoute = ROUTES.SEARCH;

  @action setRoute = (which) => {
    this.currentRoute = which;
  }
}
