import Immutable from 'seamless-immutable';

import * as types from './actionTypes';

const initialState = Immutable({
  rents: '',
  isLoading: false,
  localRents: [],
  wishes: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.RENTS_FETCH:
      return state.merge({
        isLoading: true
      });
    case types.RENTS_FETCH_SUCCESS:
      return state.merge({
        rents: action.payload,
        isLoading: false
      });
    case types.RENTS_FETCH_FAILURE:
      return state.merge({
        isLoading: false
      });
    case types.RENTS_CLEANED:
      return state.merge({
        rents: '',
        isLoading: true
      });
    case types.RENTS_SAVED:
      return state.merge({
        localRents: action.payload
      });
    case types.RENTS_WISHES_FETCHED:
      return state.merge({
        wishes: action.payload
      });
    case types.RENTS_WISHES_SAVING:
      return state.merge({
        isLoading: true
      });
    case types.RENTS_WISHES_SAVED:
      return state.merge({
        isLoading: false
      });
    default:
      return state;
  }
}
