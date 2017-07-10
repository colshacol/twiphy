import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Frame from './Frame'

export default () => (
  <Router history={hashHistory}>
    <Route path='/' component={Frame}>
    </Route>
  </Router>
)
