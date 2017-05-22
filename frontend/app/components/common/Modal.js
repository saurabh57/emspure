import React, {Component} from 'react';
import {Dialog,FlatButton} from 'material-ui';

import * as MODAL_COMPONENTS from 'components/modals';
import {hideModal} from 'actions/modalAction';

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		}
		this.handleClose = this.handleClose.bind(this);
	}
	handleClose() {
		const { dispatch } = this.props;
		dispatch(hideModal());
	};
	render(){
		const { modal } = this.props;
		let open = modal.modalType === null ? false : true;
		const ModalComponent = MODAL_COMPONENTS[this.props.modalComponent] || null;
	    const actions = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onTouchTap={this.handleClose}
	      />,
	      <FlatButton
	        label="Submit"
	        primary={true}
	        disabled={true}
	        onTouchTap={this.handleClose}
	      />,
	    ];

		return (
			        <Dialog
			          title="Dialog With Actions"
			          actions={actions}
			          modal={true}
			          open={open}
			        >
			          Only actions can close this dialog.
			        </Dialog>
			)
	}
}
export default Modal;