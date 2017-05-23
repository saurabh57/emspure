//Creating About tab
import React,{Component} from 'react';
import styles from 'styles/components/tabs/about';
import Card from 'components/common/Card';

class About extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const { dispatch } = this.props;
		return (
				<div className={styles.about}>
					<Card title="Personal Info" cardComponent="PersonalInfo" dispatch={dispatch} />
					<Card title="Education Info" cardComponent="EducationInfo" dispatch={dispatch} />
					<Card title="Contact Info" cardComponent="ContactInfo" dispatch={dispatch} />
				</div>
			)
	}
}

export default About;
