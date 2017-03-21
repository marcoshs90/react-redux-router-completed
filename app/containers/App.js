import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './topics/TopicsScreen'
import Teste from './teste/Teste'

export default (
  <Route path="/" component={App}>
    <Route path="/teste" component={Teste} />
  </Route>
)
