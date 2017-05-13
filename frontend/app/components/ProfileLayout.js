import React , {Component} from 'react';
import CoverPic from './common/CoverPic';
import ProfileSummaryCard from './ProfileSummaryCard';
import styles from 'styles/components/profileLayout';
class ProfileLayout extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className={styles.profileLayoutContainer}>
				<CoverPic />
				<ProfileSummaryCard />
			</div>
			)
	}
}

export default ProfileLayout;