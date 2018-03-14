import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  user: '',
  userId: '',
  userSimpleId: '',
  userObject: '',
  userName: '',
  password: '',
  isLogged: false,
  loginFailed: false,
  loginLoading: false,
  dataLoading: false,
  rentsLoading: false,
  commentsLoading: false,
  rents: [],
  comments: [],
  loggedUser: ''
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.USER_LOGIN_SUCCESS:
      return state.merge({
        user: action.payload.token,
        userId: action.payload.id,
        loggedUser: action.payload.loggedUser,
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
        userId: '',
        userName: '',
        password: '',
        isLogged: false,
        loginFailed: false
      });
    case types.USER_DATA_FETCH:
      return state.merge({
        dataLoading: true
      });
    case types.USER_DATA_FETCH_SUCCESS:
      return state.merge({
        userSimpleId: action.payload.userId,
        userObject: action.payload.user,
        dataLoading: false
      });
    case types.USER_DATA_FETCH_FAILURE:
      return state.merge({
        dataLoading: false
      });
    case types.USER_RENTS_FETCH:
      return state.merge({
        rentsLoading: true
      });
    case types.USER_RENTS_FETCH_SUCCESS:
      return state.merge({
        rents: action.payload.rents,
        rentsLength: action.payload.rentsLength,
        rentsLoading: false
      });
    case types.USER_RENTS_FETCH_FAILURE:
      return state.merge({
        rentsLoading: false
      });
    case types.USER_COMMENTS_FETCH:
      return state.merge({
        commentsLoading: true
      });
    case types.USER_COMMENTS_FETCH_SUCCESS:
      return state.merge({
        comments: action.payload.comments,
        commentsLength: action.payload.commentsLength,
        commentsLoading: false
      });
    case types.USER_COMMENTS_FETCH_FAILURE:
      return state.merge({
        commentsLoading: false
      });
    default:
      return state;
  }
}
