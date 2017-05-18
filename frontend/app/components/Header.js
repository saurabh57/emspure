//Creating main header 
import React,{Component} from 'react';
import {EMSHeader} from 'bootstrapComponent';
import style from 'styles/components/header';
class Header extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<EMSHeader navbarClass={style.headerClass} />
			)
	}
}

export default Header; 
