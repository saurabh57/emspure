//Creating Footer
import React,{Component} from 'react';
import styles from 'styles/components/tabs/about';

class PersonalInfo extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div>
					<ul className={styles.cardText}>
						<li>Name : Arvind Kumar Singh</li>
						<li>Date Of Birth : 11/10/1991</li>
						<li>Gender : Male</li>
					</ul>
				</div>
			)
	}
}

export default PersonalInfo; 
