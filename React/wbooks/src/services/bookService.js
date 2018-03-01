import api from '../app/config/api';

import * as localStorage from './localstorageService.js';

export const retrieveUserFromSession = () => {
  return localStorage.retrieveUserFromLocalStorage();
}

export const getAllBooks = () => {
  return api.get('/books');
}

export const getBookDetail = (bookId) => {
  return api.get('/books/'+bookId);
}
