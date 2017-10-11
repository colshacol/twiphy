import React from 'react';

import SettingsIcon from '@assets/settings.svg';
import './styles.css';

type Props = {
  handleClose: () => *
};

const TopBar = (props: Object) => {
  return (
    <div styleName='TopBar'>
      <SettingsIcon width={24} height={24}/>
      <p>twiphy</p>
      <div styleName='closer' onClick={props.handleClose}>
        <small>close</small>
      </div>
    </div>
  );
};

export default TopBar;
