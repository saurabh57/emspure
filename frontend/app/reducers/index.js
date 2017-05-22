import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';
import modal from './modalReducer';

const rootReducer = combineReducers({
	  routing: routerReducer,
	  user,
	  modal
});

export default rootReducer;