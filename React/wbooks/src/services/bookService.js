import api from '../app/config/api';

import * as localStorage from './localstorageService.js';

export const retrieveUserFromSession = () => {
  return localStorage.retrieveUserFromLocalStorage();
}

export const getAllBooks = async () => {
  return await api.get('/books', {
      'headers': { 'Authorization': retrieveUserFromSession() }
  }).then(response => {
    return response;
  }).catch(error => {
    throw error;
  });
}

export const getBookDetail = async (bookId) => {
  return await api.get('/books/'+bookId, {
      'headers': { 'Authorization': retrieveUserFromSession() }
  }).then(response => {
    return response;
  }).catch(error => {
    throw error;
  });
}
