import 'regenerator-runtime/runtime'
require('cq-prolyfill')({/* css container queries */})
import DevTools, { configureDevtool } from 'mobx-devtools'
import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import ReactDOM from 'react-dom'
import { createDomNode, getElement } from './utils'
import Router from './Router'
import waitForElement from 'wait-for-element'
import './styles/index.css'

waitForElement('#right_col.column').then(element => {
  console.log(element, getElement, createDomNode)
  element.prepend(createDomNode('<div twiphy-mount-point></div>'));
  const mountPoint = element.querySelector('div[twiphy-mount-point]');
  console.warn({ mountPoint })
  ReactDOM.render(
    <div styleName='App'>
      <DevTools/>
      <Router/>
    </div>,
    mountPoint
  )
}).catch(console.error)
