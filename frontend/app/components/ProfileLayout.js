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
				<ProfileSummaryCard />
				<TabContainer children={this.props.children} />
			</div>
			)
	}
}

export default ProfileLayout;