import React,{Component} from 'react';
import {EMSSignup} from 'customComponent';
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
	render(){
		return (
				<div><EMSSignup /></div>
			)
	}
}

export default Signup; 
