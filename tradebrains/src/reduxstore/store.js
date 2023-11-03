import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import stockReducer from './Reducer/Reducers';

const rootReducer = combineReducers({
  stock: stockReducer,
  
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;