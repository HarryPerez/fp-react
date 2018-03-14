import * as bookService from '../../services/bookService';
import * as authService from '../../services/authService';

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

export const saveWish = bookId => async (dispatch, getState) => {
  const { user, userId } = getState().session;
  dispatch({ type: types.RENTS_WISHES_SAVE });
  const saveResponse = await authService.saveWish(bookId, userId);
  if (saveResponse.statusText === 'OK') {
    dispatch({ type: types.RENTS_WISHES_SAVE_SUCCESS });

    const fetchResponse = await authService.fetchWishes(user);
    if (fetchResponse.statusText === 'OK') {
      dispatch({ type: types.RENTS_WISHES_FETCH_SUCCESS, payload: fetchResponse.data });
    }
  }
  dispatch({ type: types.RENTS_WISHES_SAVE_FAILURE });
};

export const loadWishes = () => async (dispatch, getState) => {
  const { user } = getState().session;
  dispatch({ type: types.RENTS_WISHES_FETCH });
  const response = await authService.fetchWishes(user);
  if (response.statusText === 'OK') {
    dispatch({ type: types.RENTS_WISHES_FETCH_SUCCESS, payload: response.data });
  }
  dispatch({ type: types.RENTS_WISHES_FETCH_FAILURE });
};
