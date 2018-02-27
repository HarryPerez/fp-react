import api from '../app/config/api';

import localStorage from './localstorageService.js';

const retrieveUserData = async (name, password) => {
  await api.post('/users/sessions', {
      email: name,
      password: password
  }).then(response => {
    localStorage.saveUserAuthentication(response);
    return true;
  }).catch(error => {
    throw error;
  });
}

const retrieveUserFromSession = () => {
  return localStorage.retrieveUserFromLocalStorage();
}

const registerUser = async(name, password, confirmPassword, firstName, lastName) => {
  await api.post('/users', {
    user: {
      email: name,
      password: password,
      confirm_password: confirmPassword,
      first_name: firstName,
      last_name: lastName,
      locale: 'en'
    }
  }).then(response => {
    return true;
  }).catch(error => {
    throw error;
  });
}

export default {retrieveUserData, retrieveUserFromSession, registerUser};
