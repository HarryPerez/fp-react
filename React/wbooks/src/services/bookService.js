import api from '../app/config/api';

export const getAllBooks = () => api.get('/books');

export const getBookDetail = bookId => api.get(`/books/${bookId}`);

export const getBookRents = bookId => api.get(`/books/${bookId}/rents/`);

export const saveWish = (bookId, user) =>
  api.post('/users', {
    wish: {
      book_id: bookId,
      user_id: user
    }
  });

export const getBookComments = bookId => api.get(`/books/${bookId}/comments/`);

export const saveComment = (bookId, user, comment) =>
  api.post(`/books/${bookId}/comments/`, {
    comment: {
      book_id: bookId,
      user_id: user,
      content: comment
    }
  });
