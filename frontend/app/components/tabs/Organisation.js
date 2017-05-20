//Creating About tab
import React,{Component} from 'react';
import styles from 'styles/components/tabs/organisation';
import Card from 'components/common/Card';
import { OrganisationDefault } from 'sources';

class Organisation extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const metaData = OrganisationDefault.orgNotification;
		return (
				<div className={styles.organisation}>
					<Card title="Organisation Summary" cardComponent="OrganisationUpdateInfo" metaData={metaData} />
				</div>
			)
	}
}

export default Organisation;
