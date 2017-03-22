import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import { App } from './containers/App'
import Teste from './containers/teste/Teste'

import NotFound from './containers/NotFound'

import * as reducers from './store/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} >
        <Route component={App}>
          <Route path="/" component={Teste} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
  </Provider>,
  document.getElementById('App')
);
