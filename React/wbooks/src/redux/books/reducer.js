import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  books: '',
  isLoading: true,
  filter: '',
  filterParam: '',
  filteredBooks: ''
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.BOOKS_FETCHED:
      return state.merge({
        books: action.response.data,
        filteredBooks: action.response.data,
        isLoading: false
      });
    case types.BOOKS_FILTERED:
    return state.merge({
      filter: action.filter,
      filterParam: action.filterParam,
      filteredBooks: action.filteredBooks
    });
    default:
      return state;
  }
}
