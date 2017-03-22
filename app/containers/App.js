import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    return(
      <div>
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
