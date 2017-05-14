import React , {Component} from 'react';
import styles from 'styles/components/common/tabContainer';
class TabContainer extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<div className={`${styles.tabContainer} col-sm-9`}>
					{this.props.children}
				</div>

			)
	}
}

export default TabContainer;