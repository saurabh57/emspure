import React,{Component} from 'react';
import {Header,Footer} from 'components';
import style from "styles/components/layout";
class Layout extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<div>
					<Header />
						<div className={style.mainContainer}>
							{this.props.children}
						</div>
					<Footer />
				</div>
			)
	}
}

export default Layout;