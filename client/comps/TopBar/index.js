import React from 'react';

import SettingsIcon from '@assets/settings.svg';
import SearchIcon from '@assets/search.svg';
import CloseIcon from '@assets/delete.svg';
import { ROUTES } from '@consts/routes';
import './styles.css';

type Props = {
  handleClose: () => *
};

const TopBar = (props: Object) => {
  return (
    <div styleName='TopBar'>
      <SettingsIcon
        styleName='settings-icon'
        onClick={() => props.setRoute(ROUTES.SETTINGS)}
        width={16}
        height={16}
      />
      <SearchIcon
        styleName='search-icon'
        onClick={() => props.setRoute(ROUTES.SEARCH)}
        width={16}
        height={16}
      />
      <p styleName='logo'>twiphy</p>
      <CloseIcon onClick={props.handleClose} styleName='close-icon' width={12} height={12}/>
    </div>
  );
};

export default TopBar;
