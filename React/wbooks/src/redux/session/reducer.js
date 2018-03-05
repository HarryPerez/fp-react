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
        user: action.user,
        token: action.user.access_token,
        isLogged: true
      });
    case types.USER_LOGGED_FAILED:
      return state.merge({
        isLogged: false
      });
    case types.SESSION_USERNAME_CHANGED:
      return state.merge({
        userName: action.userName,
        isLogged: ''
      });
    case types.SESSION_PASSWORD_CHANGED:
      return state.merge({
        password: action.password,
        isLogged: ''
      });
    default:
      return state;
  }
}
