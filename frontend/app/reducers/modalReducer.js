import {ModalDefault} from 'sources';
import {HIDE_MODAL , SHOW_MODAL} from 'constants';

export default function modalReducer(state = ModalDefault, action){
	switch (action.type) {
		case SHOW_MODAL: {
			return Object.assign({},action.modal);
		}		
		case HIDE_MODAL: {
			return ModalDefault;
		}
		default: {
			return state;
		}
	}
}