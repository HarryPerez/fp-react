import api from '../app/config/api';

import saveInLocalStorage from './localstorageService.js';


const retrieveUserData = async (name, password) => {
  await api.post('/users/sessions', {
      email: name,
      password: password
  }).then(response => {
    saveInLocalStorage(response);
  }).catch(error => {
    return false;
  });
}

export default retrieveUserData;
