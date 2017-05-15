//Creating Footer
import React,{Component} from 'react';
import styles from 'styles/components/tabs/about';

class EducationInfo extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div>
					<ul className={styles.cardText}>
						<li>10th : 75%</li>
						<li>12th : 92%</li>
						<li>Graduation : 86%</li>
						<li>Post Graduation : 98%</li>
					</ul>
				</div>
			)
	}
}

export default EducationInfo; 
