import api from '../app/config/api';

export const saveUserToken = user => (api.defaults.headers.common.Authorization = user);

export const getAllBooks = () => api.get('/books');

export const getBookDetail = bookId => api.get(`/books/${bookId}`);
