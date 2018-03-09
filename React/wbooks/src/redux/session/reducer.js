import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  user: '',
  userName: '',
  password: '',
  isLogged: false,
  loginFailed: false,
  loginLoading: false
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_LOGIN_SUCCESS:
      return state.merge({
        user: action.payload,
        loginFailed: false,
        isLogged: true,
        loginLoading: false
      });
    case types.USER_LOGIN:
      return state.merge({
        isLogged: false,
        loginLoading: true
      });
    case types.USER_LOGIN_FAILURE:
      return state.merge({
        isLogged: false,
        loginFailed: true,
        loginLoading: false
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
