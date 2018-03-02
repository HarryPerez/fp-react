import * as types from './actionTypes';

import * as authService from '../../services/authService';
import * as localStorageService from '../../services/localstorageService';

export const saveSession = (name, password) => async (dispatch, getState) => {
  try{
    const user = await authService.retrieveUserData(name, password);
    localStorageService.saveUserTokenAuthentication(user);
    dispatch({ type: types.USER_LOGGED, user });
  }catch(error){
    throw error;
  }
}
