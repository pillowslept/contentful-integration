import { combineReducers } from 'redux';

import productsReducer from './products';
import ratingsReducer from './ratings';

const reducers = combineReducers({
  products: productsReducer,
  ratings: ratingsReducer,
});

export default reducers;
