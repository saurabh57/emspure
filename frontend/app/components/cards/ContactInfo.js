//Creating Footer
import React,{Component} from 'react';
import styles from 'styles/components/tabs/about';
import Icon from 'components/common/Icon';
//<i class="fa fa-envelope-o" aria-hidden="true"></i>
class ContactInfo extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div>
					<ul className={styles.cardText}>
						<ul className={styles.cardText}>
							<li className={styles.textBlock}><span className={styles.cardLabelIcon}><Icon iconClass="fa-envelope-o fa-lg"/></span><span>arvindsinghnitp@gmail.com</span></li>
							<li className={styles.textBlock}><span className={styles.cardLabelIcon}><Icon iconClass="fa-mobile fa-lg"/></span><span>9591193914</span></li>
							<li className={styles.textBlock}><span className={styles.cardLabelIcon}><Icon iconClass="fa-location-arrow fa-lg"/></span><span>Pragath layout, bangalore, 560037</span></li>
						</ul>
					</ul>
				</div>
			)
	}
}

export default ContactInfo; 
