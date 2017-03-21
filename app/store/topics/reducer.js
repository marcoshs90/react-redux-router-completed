import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  topicsByUrl: undefined
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.TOPICS_FETCHED:
      return state.merge({
        topicsByUrl: action.topicsByUrl
      });
    default:
      return state;
  }
}

// selectors
export function getTopics(state) {
  const topicsByUrl = state.topics.topicsByUrl;
  return topicsByUrl;
}
