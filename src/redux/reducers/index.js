import { combineReducers } from 'redux';
import login from './loginReducer';
import products from './productsReducer';

const rootReducer = combineReducers({ login, products });

export default rootReducer;
