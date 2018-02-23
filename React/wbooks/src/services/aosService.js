import axios from 'axios';

import saveInLocalStorage from './localstorageService.js';

const retrieveUserData = async (name, password) => {
  console.log(name + password);
  try {
    const success =   await axios.post('https://wbooks-api-stage.herokuapp.com/api/v1/users/sessions', {
        email: name,
        password: password
    });
    saveInLocalStorage(success);
  }catch(error) {
    return false;
  }
}

export default retrieveUserData;
