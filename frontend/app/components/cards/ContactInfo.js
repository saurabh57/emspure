//Creating Footer
import React,{Component} from 'react';
import styles from 'styles/components/tabs/about';

class ContactInfo extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div>
					<ul className={styles.cardText}>
						<li>Email Address : arvindsinghnitp@gmail.com</li>
						<li>Mobile No. : 9591193914</li>
						<li>Address : Pragath layout, bangalore</li>
						<li>Pin Code : 560037</li>
					</ul>
				</div>
			)
	}
}

export default ContactInfo; 
