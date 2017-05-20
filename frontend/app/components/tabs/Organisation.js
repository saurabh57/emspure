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
		const organisations = OrganisationDefault;
		return (
				<div className={styles.organisation}>
				{
					organisations.map((data, index) => {
						return <Card key={index} title={data.orgName} cardComponent="OrganisationUpdateInfo" {...data} />
					})
				}
				</div>
			)
	}
}

export default Organisation;
