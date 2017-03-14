import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Info from './Info'

module.exports = (
  <Route path="/" component={App}>
    <Route path="/info" component={Info} />
    <Route path="/about" component={About}/>
  </Route>
)