import React, { Component } from 'react';
import { Link } from 'react-router';

class NotFound extends Component {
  render() {
    return(
      <div>
        <h1>Ops..</h1>
        <Link to="/">Voltar para o início</Link>
        <hr />
        <Link to="/Teste2">Ir para teste 2</Link>
      </div>
    );
  }
}

export default NotFound;
