//Creating Footer
import React,{Component} from 'react';
import styles from 'styles/components/tabs/about';

class OrganisationsInfo extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div>
					<ul className={styles.cardText}>
						<li>Organisation : Samsung</li>
						<li>State : Karnataka</li>
						<li>City : Bangalore</li>
					</ul>
				</div>
			)
	}
}

export default OrganisationsInfo;