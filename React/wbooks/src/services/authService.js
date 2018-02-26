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
export default {retrieveUserData, retrieveUserFromSession};
