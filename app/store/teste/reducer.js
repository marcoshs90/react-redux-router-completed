import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  testeByUrl: undefined
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.TESTE_FETCHED:
      return state.merge({
        testeByUrl: action.testeByUrl
      });
    default:
      return state;
  }
}

// selectors
export function getTeste(state) {
  const testeByUrl = state.teste.testeByUrl;
  return testeByUrl;
}
