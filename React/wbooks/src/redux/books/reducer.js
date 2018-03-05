import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  books: '',
  isLoading: true,
  filter: '',
  filterParam: '',
  isDetailLoading: true,
  detailedBook: ''
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.BOOKS_FETCHED:
      return state.merge({
        books: action.response.data,
        isLoading: false
      });
    case types.BOOKS_DETAILED:
      return state.merge({
        isDetailLoading: false,
        detailedBook: action.book
      });
    case types.BOOKS_FILTER_PARAM_CHANGED:
      return state.merge({
        filterParam: action.filterParam
      });
    case types.BOOKS_FILTER_CHANGED:
      return state.merge({
        filter: action.filter
      });
    default:
      return state;
  }
}
