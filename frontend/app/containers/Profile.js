import React,{Component} from 'react';
import {ProfileLayout} from 'components';
class Profile extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {headerLinks} = this.props;
		return (
				<ProfileLayout children={this.props.children} headerLinks={headerLinks}/>
			)
	}
}

export default Profile; 
