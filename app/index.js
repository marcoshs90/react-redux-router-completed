import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import { App } from './containers/App'

import Home from './containers/topics/TopicsScreen'
import Teste from './containers/teste/Teste'
import NotFound from './containers/NotFound'

import * as reducers from './store/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} >
        <Route store={store} component={App}>
          <Route path="/" component={Home} />
          <Route path="/teste" component={Teste} onEnter={requireAuth} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
  </Provider>,
  document.getElementById('App')
);


function requireAuth (nextState, replace, callback) {
  localStorage.setItem('@USER', true)
  //localStorage.removeItem('@USER')
  const token = localStorage.getItem('@USER')

  if(!token){
    replace('/')
  }
  return callback()

}
