import React, { Component } from 'react'
import { observer } from 'mobx-react'

type Props = {
  children: any
}

@observer
export default class Frame extends Component<void, Props, void> {
  render({ props, state } = this) {
    console.warn('[twiphy] | Rendering')
    return (
      <div>
        <nav>I am the navbar.</nav>
        {props.children}
      </div>
    )
  }
}
