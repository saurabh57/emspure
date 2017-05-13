import React , {Component} from 'react';
import styles from 'styles/components/common/coverPic';
class ProfilePic extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<div className={styles.profilePicContainer}></div>

			)
	}
}

export default ProfilePic;