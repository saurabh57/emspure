//Creating Footer
import React,{Component} from 'react';
import styles from 'styles/components/common/card';
import Icon from 'components/common/Icon';

class OrganisationUpdateInfo extends Component{
	constructor(props){
		super(props);
	}
	render(){
    const { metaData } = this.props;
		return (
			<div className={styles.orgNotification}>
				<ul className={styles.cardItems}>
        {
          metaData.map((data, index) => {
            return (
              <li className={styles.orgItem} key={index}>
                <Icon iconClass={`${data.iconClass} ${styles.fs5em}`} />
                <span className={styles.orgItemCount}>{data.updateCount}</span>
              </li>
            );
          })
        }
				</ul>
			</div>
		);
	}
}

export default OrganisationUpdateInfo;
