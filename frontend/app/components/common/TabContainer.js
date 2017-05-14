import React , {Component} from 'react';
import styles from 'styles/components/common/tabContainer';
class TabContainer extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<div className={styles.tabContainer}>
					{this.props.children}
				</div>

			)
	}
}

export default TabContainer;