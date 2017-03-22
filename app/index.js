import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
//import { Router, browserHistory } from 'react-router';
import { ReduxRouter } from 'redux-router'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// import routes from './containers/App';

// import App from './containers/topics/TopicsScreen'
import { App } from './containers/App'
import Teste from './containers/teste/Teste'
import Teste2 from './containers/teste/Teste2'
import NotFound from './containers/NotFound'

import * as reducers from './store/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} >
        <Route component={App}>
          <Route path="/" component={Teste} />
          <Route path="/teste2" component={Teste2} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
  </Provider>,
  document.getElementById('App')
);
