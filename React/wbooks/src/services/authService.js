import api from '../app/config/api';

import saveUserAuthentication from './localstorageService.js';

const retrieveUserData = async (name, password) => {
  await api.post('/users/sessions', {
      email: name,
      password: password
  }).then(response => {
    saveUserAuthentication(response);
    console.log(response);
    return true;
  }).catch(error => {
    throw error;
  });
}

export default retrieveUserData;
