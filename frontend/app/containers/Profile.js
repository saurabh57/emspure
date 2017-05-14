import React,{Component} from 'react';
import {ProfileLayout} from 'components';
class Profile extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<ProfileLayout children={this.props.children}/>
			)
	}
}

export default Profile; 
