import * as bookService from '../../services/bookService';

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

export const saveWish = (bookId, user) => console.log(`${bookId} ${user}`);
