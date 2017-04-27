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
						<div className={`${style.mainContainer} row`}>
							<div className="col-xs-12">
								{this.props.children}
							</div>
						</div>
					<Footer />
				</div>
			)
	}
}

export default Layout;