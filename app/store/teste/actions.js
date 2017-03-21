import _ from 'lodash';
import * as types from './actionTypes';
import redditService from '../../services/reddit';

export function fetchTeste() {
  return async(dispatch, getState) => {
    try {
      const testeByUrl = await redditService.getTeste();
      dispatch({ type: types.TESTE_FETCHED, testeByUrl });
    } catch (error) {
      console.error(error);
    }
  };
}
