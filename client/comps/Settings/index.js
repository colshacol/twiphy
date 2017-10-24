import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './styles.css';

@inject('settingsStore')
@observer
class Settings extends Component {
  // @observable
  render({ props, state } = this) {
    const { settingsStore } = props;

    return (
      <div styleName="Settings">
        <p>gif width:</p>
        <input
          value={settingsStore.gifWidth}
          onChange={settingsStore.setGifWidth}
        />
      </div>
    );
  }
}

export default Settings;
