import React, {Component} from 'react';
import {Dialog,FlatButton,RaisedButton} from 'material-ui';
import {renderChildren} from 'utils';

import * as MODAL_COMPONENTS from 'components/modals';
import {hideModal} from 'actions/modalAction';

class Modal extends Component {
	constructor(props) {
		super(props);
		const _this = this;
		const { modalProps } = this.props;
		this.handleClose = this.handleClose.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		const style = {
			'marginLeft':'10px'
		}
		this.state = {
			defaultConfig: {
				'confirm': {
					"modal": false,
					"actions": [
					      <FlatButton
					        label="Cancel"
					        disableTouchRipple={true}
					        style={style}
					        onTouchTap={this.handleClose}
					      />,
					      <RaisedButton
					        label="Submit"
					        primary={true}
					        disabled={false}
					        disableTouchRipple={true}
					        style={style}
					        onTouchTap={this.handleSubmit}
					      />
				    ],
				},
				'modal': {
					modal: true,
					"actions": [
					      <FlatButton
					        label="Cancel"
					        disableTouchRipple={true}
					        style={style}
					        onTouchTap={this.handleClose}
					      />,
					      <RaisedButton
					        label="Submit"
					        primary={true}
					        disabled={false}
					        disableTouchRipple={true}
					        style={style}
					        onTouchTap={this.handleSubmit}
					      />
				    ]
				}
			}
		}
	}
	handleClose() {
		const { dispatch } = this.props;
		dispatch(hideModal());
	}
	handleSubmit() {
		const { modalProps } = this.props;
		modalProps.onSubmit && modalProps.onSubmit();
		this.handleClose();
	}
	render(){
		const { modalType , modalProps , modalComponent } = this.props;
		
		const ModalComponent = MODAL_COMPONENTS[modalComponent] || DefaultComponent ;

		return (
			        <Dialog
				          title={modalProps.title || null}
				          actions={modalType && this.state.defaultConfig[modalType]["actions"]}
				          modal={modalType && this.state.defaultConfig[modalType]["modal"] || false}	
				          onRequestClose={this.handleClose}
				          autoScrollBodyContent={true}
				          open={modalType !== null}>
							<ModalComponent {...modalProps} />
			        </Dialog>
			)
	}
}
const DefaultComponent = (props) => {
	return <span>{props.text}</span>
}
export default Modal;