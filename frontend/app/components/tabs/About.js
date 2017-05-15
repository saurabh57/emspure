//Creating About tab
import React,{Component} from 'react';
import styles from 'styles/components/tabs/about';
import Card from 'components/common/Card';
import {PersonalInfo, EducationInfo, ContactInfo} from 'components/cards';


class About extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div className={styles.about}>
					<Card title="Personal Info" cardComponent="PersonalInfo" />
					<Card title="Education Info" cardComponent="EducationInfo" />
					<Card title="Contact Info" cardComponent="ContactInfo" />
				</div>
			)
	}
}

export default About; 