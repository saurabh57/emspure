import React,{Component, PropTypes} from 'react';
import {EMSSignin} from 'materialUIComponent';
import {ModuleTitle} from 'components';
import { connect } from 'react-redux';
import * as actions from 'actions/user';

class Signin extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				<ModuleTitle moduleTitle={"Sign In"}/>
				<EMSSignin login={this.props.login}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch,
		login: (user) => {
			actions.login(dispatch,user);
		}
	}
};

Signin.propTypes = {
	login: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
