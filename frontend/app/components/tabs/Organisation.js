//Creating About tab
import React,{Component} from 'react';
import styles from 'styles/components/tabs/organisation';

class Organisation extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div className={styles.organisation}>
					Organisation details
				</div>
			)
	}
}

export default Organisation; 