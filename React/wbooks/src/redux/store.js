import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import books from './books/reducer';
import session from './session/reducer';

const reducers = {
  books,
  session
};

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default store;
