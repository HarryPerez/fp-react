import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  user: '',
  userName: '',
  password: '',
  isLogged: false,
  loginFailed: false
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_LOGGED_SUCCESFULLY:
      return state.merge({
        user: action.payload,
        loginFailed: false
      });
    case types.USER_LOGGED:
      return state.merge({
        isLogged: true
      });
    case types.USER_LOGGED_FAILED:
      return state.merge({
        isLogged: false,
        loginFailed: true
      });
    case types.SESSION_USERNAME_CHANGED:
      return state.merge({
        userName: action.payload,
        isLogged: false,
        loginFailed: false
      });
    case types.SESSION_PASSWORD_CHANGED:
      return state.merge({
        password: action.payload,
        isLogged: false,
        loginFailed: false
      });
    case types.SESSION_CLOSED:
      return state.merge({
        user: '',
        userName: '',
        password: '',
        isLogged: false,
        loginFailed: false
      });
    default:
      return state;
  }
}
