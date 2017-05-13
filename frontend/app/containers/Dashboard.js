import React,{Component} from 'react';
import style from 'styles/components/dashboard';
import {ProfileLayout} from 'components';
class Dashboard extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<ProfileLayout />
			)
	}
}

export default Dashboard; 
