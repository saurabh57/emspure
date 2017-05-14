//Creating About tab
import React,{Component} from 'react';
import styles from 'styles/components/tabs/about';
import Card from 'components/common/Card';
import {PersonalInfo} from 'components/cards';


class About extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div className={styles.about}>
					<Card title="personalInfo" cardComponent="PersonalInfo" />
				</div>
			)
	}
}

export default About; 