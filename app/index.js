import React from 'react';
import { render } from 'react-dom';
/*import { Router, Route, Link, browserHistory } from 'react-router';*/
import { Router, Route, browserHistory} from 'react-router';

import App from './components/App';
import Info from './components/Info';
import About from './components/About';

render(
    <Router history={browserHistory}>
	   <Route path="/" component={App}/>
	   <Route path="/info" component={Info}/>
	   <Route path="/about" component={About}/>
	</Router>,
    document.getElementById('App')
);