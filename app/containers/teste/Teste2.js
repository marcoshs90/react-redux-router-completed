import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import * as testeActions from '../../store/teste/actions';
import * as testeSelectors from '../../store/teste/reducer';

import { Link } from 'react-router';

class Teste2 extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.dispatch(testeActions.fetchTeste());
  }

  render() {
    return (
      <div>
        <h1>Esse é o teste 2</h1>
        <Link to="/">Voltar</Link>
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

export default connect(mapStateToProps)(Teste2);
