import api from '../app/config/api';

import * as localStorage from './localstorageService.js';

export const retrieveUserFromSession = () => localStorage.retrieveUserTokenFromLocalStorage();

export const getAllBooks = () => api.get('/books');

export const getBookDetail = (bookId) => api.get('/books/'+bookId);
