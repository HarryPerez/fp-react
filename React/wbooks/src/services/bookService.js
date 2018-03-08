import api from '../app/config/api';

import * as localStorage from './localstorageService';

export const retrieveUserFromSession = () => localStorage.retrieveUserTokenFromLocalStorage();

export const saveUserToken = user => (api.defaults.headers.common.Authorization = user);

export const getAllBooks = () => api.get('/books');

export const getBookDetail = bookId => api.get(`/books/${bookId}`);
