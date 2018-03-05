import * as types from './actionTypes';

import * as authService from '../../services/authService';
import * as localStorageService from '../../services/localstorageService';

export const saveSession = (name, password) => async (dispatch, getState) => {
  try{
    const user = await authService.retrieveUserData(name, password);
    if(user){
      localStorageService.saveUserTokenAuthentication(user);
      dispatch({ type: types.USER_LOGGED, user });
    }
  }catch(error){
    dispatch({ type: types.USER_LOGGED_FAILED });
  }
}


export const saveUserName = (userName) => (dispatch, getState) => dispatch({ type: types.SESSION_USERNAME_CHANGED, userName });

export const savePassword = (password) => (dispatch, getState) => dispatch({ type: types.SESSION_PASSWORD_CHANGED, password });

export const closeSession = () => (dispatch, getState) => {
  localStorageService.removeUserTokenAuthentication();
  dispatch({ type: types.SESSION_CLOSED });
}
