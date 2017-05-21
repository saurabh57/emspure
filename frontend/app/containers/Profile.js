import React,{Component} from 'react';
import {ContentLayout} from 'components';
class Profile extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {headerLinks,route} = this.props;
		return (
				<ContentLayout children={this.props.children} tabs={headerLinks[route.activeTab]["subTab"]}/>
			)
	}
}

export default Profile; 
