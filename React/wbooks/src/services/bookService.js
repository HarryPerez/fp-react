import api from '../app/config/api';

import localStorage from './localstorageService.js';

const retrieveUserFromSession = () => {
  return localStorage.retrieveUserFromLocalStorage();
}

const getAllBooks = async () => {
  return await api.get('/books', {
      'headers': { 'Authorization': retrieveUserFromSession() }
  }).then(response => {
    return response;
  }).catch(error => {
    throw error;
  });
}

const getBookDetail = async (bookId) => {
  return await api.get('/books/'+bookId, {
      'headers': { 'Authorization': retrieveUserFromSession() }
  }).then(response => {
    return response;
  }).catch(error => {
    throw error;
  });
}

export default {getAllBooks, getBookDetail};
