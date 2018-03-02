import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  user: '',
  token: ''
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_LOGGED:
      return state.merge({
        user: action.user,
        token: action.user.access_token
      });
    default:
      return state;
  }
}
