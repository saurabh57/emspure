//ModuleTitle.js
import React,{Component} from 'react';
import style from 'styles/components/common/moduleTitle';
class ModuleTitle extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div className={`${style.moduleTitle} text-center`}>{this.props.moduleTitle}</div>
			)
	}
}

export default ModuleTitle; 
