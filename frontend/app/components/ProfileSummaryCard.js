import React , {Component} from 'react';
import ProfilePic from './common/ProfilePic';
import styles from 'styles/components/profileSummaryCard'
class ProfileSummaryCard extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className={styles.profileSummaryCard}>
				<ProfilePic />
				<BasicInfo />
			</div>
			)
	}
}

const BasicInfo = () =>{
	return(
		<ul className={styles.infoContainer}>
			<li>Saurabh Panday</li>
		</ul>
	)
} 

export default ProfileSummaryCard;