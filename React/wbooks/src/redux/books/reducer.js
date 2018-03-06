import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  books: '',
  isLoading: true,
  filter: '',
  filterParam: '',
  isDetailLoading: true,
  detailedBookId: ''
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.BOOKS_FETCHED:
      return state.merge({
        books: action.payload,
        isLoading: false
      });
    case types.BOOKS_DETAILING:
      return state.merge({
        detailedBookId: action.payload
      });
    case types.BOOKS_DETAILED:
      return state.merge({
        isDetailLoading: false
      });
    case types.BOOKS_FILTER_PARAM_CHANGED:
      return state.merge({
        filterParam: action.payload
      });
    case types.BOOKS_FILTER_CHANGED:
      return state.merge({
        filter: action.payload
      });
    default:
      return state;
  }
}
