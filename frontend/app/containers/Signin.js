import React,{Component} from 'react';
import {EMSSignin} from 'materialUIComponent';
import {ModuleTitle} from 'components';
class Signin extends Component{
	// email id
	// password
	// forgot password
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div>
					<ModuleTitle moduleTitle={"Sign In"}/>
					<EMSSignin />
				</div>
			)
	}
}

export default Signin; 
