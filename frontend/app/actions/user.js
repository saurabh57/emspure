import { LOGGED_IN } from 'constants';
import { API } from 'config';

export function login(dispatch, user) {
	const userData = {id: 1, name: 'Surya'};

	fetch(API.signin, {
    method: 'post',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: {}
  })
	.then((resp) => resp.json())
	.then(function(data){
		console.log(data);
	})
	.catch(function(err){
		console.log(err);
	});

	dispatch({
		type: LOGGED_IN,
		content: userData
	})
}
