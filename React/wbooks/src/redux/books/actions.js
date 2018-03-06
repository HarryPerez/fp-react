import * as types from './actionTypes';

import * as bookService from '../../services/bookService';

export const fetchBooks = () => async (dispatch, getState) => {
  const response = await bookService.getAllBooks();
  if (response.statusText === 'OK') {
    dispatch({ type: types.BOOKS_FETCHED, payload: response.data });
  }
}

export const saveBookDetailId = (bookId) => (dispatch, getState) => {
  dispatch({ type: types.BOOKS_DETAILING, payload: bookId });
  dispatch({ type: types.BOOKS_DETAILED });
}

export const saveFilter = (filter) => (dispatch, getState) => dispatch({ type: types.BOOKS_FILTER_CHANGED, payload: filter });

export const saveFilterParam = (filterParam) => (dispatch, getState) => dispatch({ type: types.BOOKS_FILTER_PARAM_CHANGED, payload: filterParam });
