import {HIDE_MODAL , SHOW_MODAL} from 'constants';

export function showModal(modal){
	return { type: SHOW_MODAL, modal };
}

export function hideModal(){
	return { type: HIDE_MODAL };
}