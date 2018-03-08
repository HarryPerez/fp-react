import * as bookService from '../../services/bookService';

import * as types from './actionTypes';

export const fetchBooks = user => async dispatch => {
  bookService.saveUserToken(user);
  const response = await bookService.getAllBooks();
  console.log(response);
  if (response.statusText === 'OK') {
    dispatch({ type: types.BOOKS_FETCHED, payload: response.data });
    return response;
  }
  return false;
};

export const saveBookDetailId = bookId => dispatch => {
  dispatch({ type: types.BOOKS_DETAILING, payload: bookId });
  dispatch({ type: types.BOOKS_DETAILED });
};

export const saveFilter = filter => dispatch =>
  dispatch({ type: types.BOOKS_FILTER_CHANGED, payload: filter });

export const saveFilterParam = filterParam => dispatch =>
  dispatch({ type: types.BOOKS_FILTER_PARAM_CHANGED, payload: filterParam });
