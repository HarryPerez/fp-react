import * as bookService from '../../services/bookService';
import * as authService from '../../services/authService';

import * as types from './actionTypes';

export const fetchRents = bookId => async dispatch => {
  dispatch({ type: types.RENTS_FETCH });
  const response = await bookService.getBookRents(bookId);
  if (response.statusText === 'OK') {
    dispatch({ type: types.RENTS_FETCH_SUCCESS, payload: response.data });
    return response;
  }
  dispatch({ type: types.RENTS_FETCH_FAILURE });
  return false;
};

export const saveRents = localRents => dispatch => dispatch({ type: types.RENTS_SAVED, payload: localRents });

export const saveWish = (bookId, user) => async dispatch => {
  dispatch({ type: types.RENTS_WISHES_SAVING });
  await authService.saveWish(bookId, user);
  dispatch({ type: types.RENTS_WISHES_SAVED });
};

export const loadWishes = user => async dispatch => {
  dispatch({ type: types.RENTS_WISHES_FETCH });
  const response = await authService.fetchWishes(user);
  if (response.statusText === 'OK') {
    dispatch({ type: types.RENTS_WISHES_FETCH_SUCCESS, payload: response.data });
    return response;
  }
  dispatch({ type: types.RENTS_WISHES_FETCH_FAILURE });
  return false;
};
