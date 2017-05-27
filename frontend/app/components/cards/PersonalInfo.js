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
						<li className={styles.textBlock}><span className={styles.cardLabel}>Name :</span><span>Arvind Kumar Singh</span></li>
						<li className={styles.textBlock}><span className={styles.cardLabel}>Date Of Birth :</span><span>11/10/1991</span></li>
						<li className={styles.textBlock}><span className={styles.cardLabel}>Gender :</span><span>Male</span></li>
						<li className={styles.textBlock}><span className={styles.cardLabel}>Merital Status :</span><span>Single</span></li>
						<li className={styles.textBlock}><span className={styles.cardLabel}>About me :</span><span>Very boring guy</span></li>
					</ul>
				</div>
			)
	}
}

export default PersonalInfo; 
