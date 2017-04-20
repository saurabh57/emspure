import React,{Component} from 'react';
import {Header,Footer} from 'components';
class Layout extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<div>
					<Header />
						{this.props.children}
					<Footer />
				</div>
			)
	}
}

export default Layout;