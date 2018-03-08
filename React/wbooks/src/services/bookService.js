import api from '../app/config/api';

export const getAllBooks = () => api.get('/books');

export const getBookDetail = bookId => api.get(`/books/${bookId}`);
