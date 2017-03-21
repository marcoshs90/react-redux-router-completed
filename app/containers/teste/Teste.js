import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
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
        Testando
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { };
}

export default connect(mapStateToProps)(Teste);
