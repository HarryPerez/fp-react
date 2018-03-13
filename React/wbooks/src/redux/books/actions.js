import * as bookService from '../../services/bookService';

import * as types from './actionTypes';

export const fetchBooks = () => async dispatch => {
  dispatch({ type: types.BOOKS_FETCH });
  const response = await bookService.getAllBooks();
  if (response.statusText === 'OK') {
    dispatch({ type: types.BOOKS_FETCH_SUCCESS, payload: response.data });
    return response;
  }
  dispatch({ type: types.BOOKS_FETCH_FAILURE });
  return false;
};

export const saveFilter = filter => dispatch =>
  dispatch({ type: types.BOOKS_FILTER_CHANGED, payload: filter });

export const saveFilterParam = filterParam => dispatch =>
  dispatch({ type: types.BOOKS_FILTER_PARAM_CHANGED, payload: filterParam });

export const cleanBooks = () => dispatch => dispatch({ type: types.BOOKS_CLEANED });

export const fetchComments = bookId => async dispatch => {
  dispatch({ type: types.BOOKS_COMMENTS_FETCH, payload: bookId });
  const response = await bookService.getBookComments(bookId);
  if (response.statusText === 'OK') {
    const orderedComments = response.data.sort(
      (comment, nextComment) => Number(nextComment.id) - Number(comment.id)
    );
    dispatch({ type: types.BOOKS_COMMENTS_FETCH_SUCCESS, payload: orderedComments });
    return response;
  }
  dispatch({ type: types.BOOKS_COMMENTS_FETCH_FAILURE });
  return false;
};

export const saveComment = comment => dispatch =>
  dispatch({ type: types.BOOKS_COMMENTS_CHANGED, payload: comment });

export const sendComment = (bookId, user, comment) => async dispatch => {
  dispatch({ type: types.BOOKS_COMMENTS_SAVE });
  const response = await bookService.saveComment(bookId, user, comment);
  if (response.statusText === 'OK') {
    dispatch({ type: types.BOOKS_COMMENTS_SAVED_SUCCESS });
    return response;
  }
  dispatch({ type: types.BOOKS_COMMENTS_SAVED_FAILURE });
  return false;
};
