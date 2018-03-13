import * as bookService from '../../services/bookService';
import * as authService from '../../services/authService';
import store from '../store';

import * as types from './actionTypes';

export const fetchRents = bookId => async dispatch => {
  dispatch({ type: types.RENTS_FETCH });
  const response = await bookService.getBookRents(bookId);
  if (response.statusText === 'OK') {
    dispatch({ type: types.RENTS_FETCH_SUCCESS, payload: response.data });
  }
  dispatch({ type: types.RENTS_FETCH_FAILURE });
};

export const saveRents = localRents => dispatch => dispatch({ type: types.RENTS_SAVED, payload: localRents });

export const saveWish = (bookId, user) => async dispatch => {
  dispatch({ type: types.RENTS_WISHES_SAVING });
  await authService.saveWish(bookId, user);
  dispatch({ type: types.RENTS_WISHES_SAVED });
};

export const loadWishes = () => async dispatch => {
  const wishes = await authService.fetchWishes(store.getState().session.user);
  dispatch({ type: types.RENTS_WISHES_FETCHED, payload: wishes.data });
};
