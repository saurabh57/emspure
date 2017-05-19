import {LOGGED_IN} from 'constants/user';

export function login(dispatch, user) {
	const userData = {id: 1, name: 'Surya'};
	dispatch({
		type: LOGGED_IN,
		content: userData
	})
}