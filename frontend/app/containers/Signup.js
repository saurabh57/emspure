import React,{Component} from 'react';
import {EMSSignup} from 'materialUIComponent';
import { connect } from 'react-redux';
import {ModuleTitle} from 'components';

class Signup extends Component{
	constructor(props){
		super(props);
	}
	render(){app
		return (
				<div>
					<ModuleTitle moduleTitle={"Sign Up"}/>
					<EMSSignup />
				</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {

	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup); 
