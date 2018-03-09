import * as authService from '../../services/authService';
import * as localStorageService from '../../services/localstorageService';

import * as types from './actionTypes';

export const saveSession = (name, password) => async dispatch => {
  dispatch({ type: types.USER_LOGIN });
  try {
    const user = await authService.retrieveUserData(name, password);
    if (user) {
      localStorageService.saveUserTokenAuthentication(user);
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: user.access_token });
      return user;
    }
  } catch (error) {
    dispatch({ type: types.USER_LOGIN_FAILURE });
    return false;
  }
  return false;
};

export const saveUserName = userName => dispatch =>
  dispatch({ type: types.SESSION_USERNAME_CHANGED, payload: userName });

export const savePassword = password => dispatch =>
  dispatch({ type: types.SESSION_PASSWORD_CHANGED, payload: password });

export const closeSession = () => dispatch => {
  localStorageService.removeUserTokenAuthentication();
  dispatch({ type: types.SESSION_CLOSED });
};

export const loadSession = () => dispatch => {
  const user = localStorageService.retrieveUserTokenFromLocalStorage();
  dispatch({ type: types.USER_LOGIN_SUCCESS, payload: user });
};
