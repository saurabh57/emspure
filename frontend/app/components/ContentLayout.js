import React , {Component} from 'react';
import CoverPic from './common/CoverPic';
import ProfileSummaryCard from './ProfileSummaryCard';
import styles from 'styles/components/contentLayout';
import TabContainer from './common/TabContainer';
class ContentLayout extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {tabs} = this.props;

		return(
			<div className={styles.contentLayoutContainer}>
				<div className={styles.coverWrapper}>
					<CoverPic />
					<TabContainer tabs={tabs}/>
				</div>
				<div className={`${styles.leftContent} col-sm-3 col-xs-12`}>
					<ProfileSummaryCard />
				</div>
				<div className={styles.contentWrapper}>
					<div className={`${styles.middleContent} col-md-6 col-xs-12 col-md-offset-3`}>
						{this.props.children}
					</div>
					<div className={`${styles.rightContent} col-sm-3 col-xs-12`}>
					</div>
				</div>
			</div>
			)
	}
}

export default ContentLayout;