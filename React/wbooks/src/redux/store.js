import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import books from './books/reducer';
import session from './session/reducer';

const reducers = {
  books,
  session
};

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(combineReducers(reducers), composeEnhancers(applyMiddleware(thunk)));

export default store;
