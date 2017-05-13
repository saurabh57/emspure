import React , {Component} from 'react';
import styles from 'styles/components/common/coverPic';
class CoverPic extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<div className={styles.coverPicContainer}></div>

			)
	}
}

export default CoverPic;