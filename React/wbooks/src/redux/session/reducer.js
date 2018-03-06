import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  user: '',
  userName: '',
  password: '',
  token: '',
  isLogged: ''
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_LOGGED:
      return state.merge({
        user: action.payload,
        token: action.payload.access_token,
        isLogged: true
      });
    case types.USER_LOGGED_FAILED:
      return state.merge({
        isLogged: false
      });
    case types.SESSION_USERNAME_CHANGED:
      return state.merge({
        userName: action.payload,
        isLogged: ''
      });
    case types.SESSION_PASSWORD_CHANGED:
      return state.merge({
        password: action.payload,
        isLogged: ''
      });
    case types.SESSION_CLOSED:
      return state.merge({
        user: '',
        userName: '',
        password: '',
        token: '',
        isLogged: ''
      });
    default:
      return state;
  }
}
