import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router'

export class App extends Component {
  render() {
    return(
      <div>
        <div>
          <h1>React Router Tutorial</h1>
          <ul role="nav">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/info">Info</Link></li>
          </ul>
        </div>
        { this.props.children }
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(App);
