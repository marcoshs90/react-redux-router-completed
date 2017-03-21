import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
//import { Router, browserHistory } from 'react-router';
import { ReduxRouter } from 'redux-router'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

//import routes from './containers/App';

import App from './containers/topics/TopicsScreen'
import Teste from './containers/teste/Teste'

import * as reducers from './store/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
  <div>
  <Provider store={store}>
      <Router history={browserHistory} >
        <Route path="/" component={App}>
          <Route path="teste" component={Teste} />
        </Route>
      </Router>
  </Provider>
  </div>,
  document.getElementById('App')
);
