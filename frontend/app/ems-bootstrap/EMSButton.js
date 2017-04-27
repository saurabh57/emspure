import React,{Component} from 'react';
import style from 'styles/emsBootstrap/emsButtons';
class EMSButton extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<button type={this.props.type} className={`btn ${style.btnDefault} ${style[this.props.type]}`} onClick={this.props.onClick}>{this.props.name || this.props.children}</button>
			)
	}
}

export default EMSButton;