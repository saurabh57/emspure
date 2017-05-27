import React,{Component} from 'react';
import { connect } from 'react-redux';
import {ContentLayout} from 'components';

class Profile extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {headerLinks, route, dispatch } = this.props;
		return (
				<ContentLayout children={this.props.children} tabs={headerLinks[route.activeTab]["subTab"]} dispatch={dispatch} />
			)
	}
}

function mapStateToProps(state) {
	return {
	
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
