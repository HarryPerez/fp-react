import api from '../app/config/api';

import * as localStorage from './localstorageService.js';

export const retrieveUserFromSession = () => {
  return localStorage.retrieveUserFromLocalStorage();
}

export const getAllBooks = async () => {
  return await api.get('/books');
}

export const getBookDetail = async (bookId) => {
  return await api.get('/books/'+bookId);
}
