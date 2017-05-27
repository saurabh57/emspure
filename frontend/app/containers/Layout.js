import React,{Component} from 'react';
import {Header,Footer,Modal} from 'components';
import style from "styles/components/layout";
import { connect } from 'react-redux';
import { headerLinks } from 'sources';
import {renderChildren} from 'utils';

class Layout extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {user, modal, dispatch} = this.props;

		return (
			<div>
				<Header user={user} headerLinks={headerLinks}/>
				<div className={`${style.mainContainer}`}>
					{renderChildren(this.props.children,{headerLinks})}
				</div>
				<Footer />
				<Modal {...modal} dispatch={dispatch} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		modal: state.modal
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);