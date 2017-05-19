//Creating Footer
import React,{Component} from 'react';
import styles from 'styles/components/tabs/about';

//school
// degree
// field of study
//Grade
// time perod - from to - is current org
// description

class EducationInfo extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div>
					<ul className={styles.cardText}>
						<li>
							<div className={styles.textBlockBold}><span>Delhi Public School, Patna</span></div>
							<div className={styles.textBlock}><span>Secondary, </span><span>Science</span></div>
							<div className={styles.textBlock}><span>Batch of 2005-2006</span></div>
						</li>
						<hr />
						<li>
							<div className={styles.textBlockBold}><span>Lucent International School, Patna</span></div>
							<div className={styles.textBlock}><span>Senior Secondary, </span><span>Maths</span></div>
							<div className={styles.textBlock}><span>Batch of 2006-2008</span></div>
						</li>
						<hr />
						<li>
							<div className={styles.textBlockBold}><span>National Institute of Technology, Patna</span></div>
							<div className={styles.textBlock}><span>Bachelor of Technology, </span><span>ECE</span></div>
							<div className={styles.textBlock}><span>Batch of 2009-2013</span></div>
						</li>
					</ul>
				</div>
			)
	}
}

export default EducationInfo; 
