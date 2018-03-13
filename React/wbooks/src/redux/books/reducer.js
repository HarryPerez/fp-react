import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  books: '',
  isLoading: false,
  filter: '',
  filterParam: '',
  comments: '',
  commentsLoading: false
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.BOOKS_FETCH:
      return state.merge({
        isLoading: true
      });
    case types.BOOKS_COMMENTS_FETCH:
      return state.merge({
        commentsLoading: true
      });
    case types.BOOKS_FETCH_SUCCESS:
      return state.merge({
        books: action.payload,
        isLoading: false
      });
    case types.BOOKS_COMMENTS_FETCH_SUCCESS:
      return state.merge({
        comments: action.payload,
        commentsLoading: false
      });
    case types.BOOKS_FETCH_FAILURE:
      return state.merge({
        isLoading: false
      });
    case types.BOOKS_COMMENTS_FETCH_FAILURE:
      return state.merge({
        commentsLoading: false
      });
    case types.BOOKS_FILTER_PARAM_CHANGED:
      return state.merge({
        filterParam: action.payload
      });
    case types.BOOKS_FILTER_CHANGED:
      return state.merge({
        filter: action.payload
      });
    case types.BOOKS_CLEANED:
      return state.merge({
        books: '',
        isLoading: true,
        filter: '',
        filterParam: '',
        isDetailLoading: true,
        comments: ''
      });
    default:
      return state;
  }
}
