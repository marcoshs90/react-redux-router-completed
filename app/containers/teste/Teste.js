import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as testeActions from '../../store/teste/actions';
import * as testeSelectors from '../../store/teste/reducer';

class Teste extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.dispatch(testeActions.fetchTeste());
  }

  render() {
    return (
      <div className="Teste">
        <h1>HOME!!!!!!</h1>
        <Link to="/Teste2">Ir para teste 2</Link>
        <hr />
        <Link to="/opa">Ir para 404</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
	  data: state
	};
}

export default connect(mapStateToProps)(Teste);
