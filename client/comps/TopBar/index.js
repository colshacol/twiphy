import React from 'react';
import './styles.css';

type Props = {
  handleClose: () => *
};

const TopBar = (props: Object) => {
  return (
    <div styleName='TopBar'>
      <p>twiphy</p>
      <div styleName='closer' onClick={props.handleClose}>
        <small>close</small>
      </div>
    </div>
  );
};

export default TopBar;
