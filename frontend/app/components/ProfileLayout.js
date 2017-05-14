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
				<div>
					<div className={`${styles.leftContainer}, col-sm-3`}>
						<ProfileSummaryCard />
					</div>
					<TabContainer children={this.props.children} />
				</div>
			</div>
			)
	}
}

export default ProfileLayout;