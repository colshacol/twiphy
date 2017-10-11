import React from 'react';

import SettingsIcon from '@assets/settings.svg';
import CloseIcon from '@assets/delete.svg';
import './styles.css';

type Props = {
  handleClose: () => *
};

const TopBar = (props: Object) => {
  return (
    <div styleName='TopBar'>
      <SettingsIcon styleName='settings-icon' width={16} height={16}/>
      <p styleName='logo'>twiphy</p>
      <CloseIcon onClick={props.handleClose} styleName='close-icon' width={12} height={12}/>
    </div>
  );
};

export default TopBar;
