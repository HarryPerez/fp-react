import axios from 'axios';
import * as localstorageService from '../../services/localstorageService';

const api = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1',
  headers: { 'Authorization': localstorageService.retrieveUserTokenFromLocalStorage() }
});

const validateAuthorization = () => {
  if(!api.defaults.headers.common['Authorization']){
    api.defaults.headers.common['Authorization'] = localstorageService.retrieveUserTokenFromLocalStorage();
  }
}

export const getBooks = () => {
  validateAuthorization();
  return api.get('/books');
}

export const getBookDetail = (bookId) => {
  validateAuthorization();
  return api.get('/books/'+bookId);
}

export const getUser = (name, password) => api.post('/users/sessions', { email: name, password: password })

export const saveUser = (name, password, confirmPassword, firstName, lastName) =>
  api.post('/users', {
    user: {
      email: name,
      password: password,
      confirm_password: confirmPassword,
      first_name: firstName,
      last_name: lastName,
      locale: 'en'
    }
  });

  
