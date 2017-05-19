import {UserDefault} from 'sources';
import {LOGGED_IN} from 'constants/user';

export default function userReducer(state = UserDefault, action){
	switch (action.type) {
		case LOGGED_IN: {
			return Object.assign({},state,action.content);
		}
		default: {
			return state;
		}
	}
}