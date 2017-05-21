import React,{Component} from 'react';
import {Header,Footer} from 'components';
import style from "styles/components/layout";
import { connect } from 'react-redux';
import { headerLinks } from 'sources';
import {renderChildren} from 'utils';

class Layout extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {user} = this.props;

		return (
			<div>
				<Header user={user} headerLinks={headerLinks}/>
				<div className={`${style.mainContainer}`}>
					{renderChildren(this.props.children,{headerLinks})}
				</div>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);