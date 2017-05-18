//Ribbon.js
import React,{Component} from 'react';
import style from 'styles/components/common/ribbon.scss';
class Ribbon extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div className={`${style.ribbonContainer} text-center`}>
					<a>{this.props.ribbonHeader}</a>
				</div>
			)
	}
}

export default Ribbon; 