import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import books from './books/reducer';

const reducers = {
  books
};

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default store;
