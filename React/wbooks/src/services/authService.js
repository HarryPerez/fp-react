import api from '../app/config/api';

import * as localstorageService from './localstorageService.js';

export const retrieveUserData = async (name, password) => {
  const response = await api.post('/users/sessions', {
      email: name,
      password: password
  })
  if(response){
    localstorageService.saveUserAuthentication(response);
    return true;
  }else{
    return false;
  }
}

export const retrieveUserFromSession = () => {
  return localstorageService.retrieveUserFromLocalStorage();
}

export const registerUser = (name, password, confirmPassword, firstName, lastName) => {
  return api.post('/users', {
    user: {
      email: name,
      password: password,
      confirm_password: confirmPassword,
      first_name: firstName,
      last_name: lastName,
      locale: 'en'
    }
  });
}
