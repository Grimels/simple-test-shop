import 'regenerator-runtime/runtime';

import { compose, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { reducer } from './cartStore';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = ((initialState) =>
  createStore(reducer, initialState, composeEnhancers(applyMiddleware(ReduxThunk))))();

export default store;
