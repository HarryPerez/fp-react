import * as api from '../app/config/api';

import * as localstorageService from './localstorageService.js';

export const retrieveUserData = async (name, password) => {
  const response = await api.getUser(name, password);
  if(response){
    return response.data;
  }else{
    return false;
  }
}

export const retrieveUserFromSession = () => localstorageService.retrieveUserTokenFromLocalStorage();

export const registerUser = (name, password, confirmPassword, firstName, lastName) => api.saveUser(name, password, confirmPassword, firstName, lastName);
