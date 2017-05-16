import React , {Component} from 'react';
import CoverPic from './common/CoverPic';
import ProfileSummaryCard from './ProfileSummaryCard';
import styles from 'styles/components/profileLayout';
import TabContainer from './common/TabContainer';
class ProfileLayout extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className={styles.profileLayoutContainer}>
				<CoverPic />
				<TabContainer/>
				<div className={styles.profileWrapper}>
					<div className={styles.leftContent}>
						<ProfileSummaryCard />
					</div>
					<div className={styles.middleContent}>
						{this.props.children}
					</div>
					<div className={styles.rightContent}>
					</div>
				</div>
			</div>
			)
	}
}

export default ProfileLayout;