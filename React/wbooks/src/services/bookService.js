import * as api from '../app/config/api';

import * as localStorage from './localstorageService.js';

export const retrieveUserFromSession = () => localStorage.retrieveUserTokenFromLocalStorage();

export const getAllBooks = () => api.getBooks();

export const getBookDetail = (bookId) => api.getBookDetail(bookId);
