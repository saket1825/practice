import { combineReducers } from 'redux';
import { productsReducer, selectedProductsReducer } from './productReducer';

const reducers = combineReducers({
	allProducts: productsReducer,
	product: selectedProductsReducer,
});
export default reducers;

// call, apply and bind
// diffing algorithm
// prop drilling
