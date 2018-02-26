import api from '../app/config/api';

import saveInLocalStorage from './localstorageService.js';


const retrieveUserData = async (name, password) => {
  try {
    const success =   await api.post('/users/sessions', {
        email: name,
        password: password
    });
    saveInLocalStorage(success);
  }catch(error) {
    return false;
  }
}

export default retrieveUserData;
