import React,{Component} from 'react';
import style from 'styles/components/dashboard';
import {ContentLayout} from 'components';
class Dashboard extends Component{
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

export default Dashboard; 
