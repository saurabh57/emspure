import React,{Component} from 'react';
import {EMSSignup} from 'materialUIComponent';
import {ModuleTitle} from 'components';
// first name
// middle name
// last name
// email id
// dob
// sex
// phone number
// password
// confirm password
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

export default Signup; 
