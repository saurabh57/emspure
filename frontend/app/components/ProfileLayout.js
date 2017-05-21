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
		const {headerLinks} = this.props;

		return(
			<div className={styles.profileLayoutContainer}>
				<div className={styles.coverWrapper}>
					<CoverPic />
					<TabContainer headerLinks={headerLinks}/>
				</div>
				<div className={`${styles.leftContent} col-sm-3 col-xs-12`}>
					<ProfileSummaryCard />
				</div>
				<div className={styles.profileWrapper}>
					<div className={`${styles.middleContent} col-sm-6 col-xs-12 col-sm-offset-3`}>
						{this.props.children}
					</div>
					<div className={`${styles.rightContent} col-sm-3 col-xs-12`}>
					</div>
				</div>
			</div>
			)
	}
}

export default ProfileLayout;