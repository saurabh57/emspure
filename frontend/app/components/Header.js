//Creating main header 
import React,{Component} from 'react';
import {EMSHeader} from 'bootstrapComponent';
import style from 'styles/components/header';
class Header extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {user} = this.props;
		return (
				<EMSHeader navbarClass={style.headerClass} user={user}/>
			)
	}
}

export default Header; 
