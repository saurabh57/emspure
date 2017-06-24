import React , {Component} from 'react';
import ProfilePic from './common/ProfilePic';
import styles from 'styles/components/profileSummaryCard';
import { UserDefault } from 'sources';
import Expander from './common/Expander';

class ProfileSummaryCard extends Component{
	constructor(props){
		super(props);
		this.state = {
			styleScroll: { transform: 'translateY(0px)' },
		}
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
	    //window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
	    //window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(event){
	    let scrollTop = event.srcElement.body.scrollTop,
	        itemTranslate = scrollTop > 60 ? scrollTop - 60 : 60 - scrollTop;
	    let styleScroll = {};
	    styleScroll.transform = `translateY(${itemTranslate}px)`;
	    this.setState({ styleScroll });
	};

	render(){
		const UserDefault = UserDefault;
		return(
			<div className={`${styles.profileSummaryCard} row`} style={this.state.styleScroll}>
				<ProfilePic />
				<BasicInfo userProps={UserDefault} />
			</div>
		)
	}
}

const BasicInfo = () =>{
	const userProps = UserDefault;
	return(
		<div className={`${styles.infoContainerWrapper} col-xs-9 col-sm-12`}>
			<ul className={styles.infoContainer}>
				<li className={styles.infoContainerHeader}>{userProps.name}</li>
				<li className={styles.infoContainerSubHeader}>ABOUT</li>
				<li className={styles.infoContainerContent}><Expander expText={userProps.about} thresholdLength={60}/></li>
				<hr />
				<li><span>Organisations</span><span className={styles.infoContainerValue}>{userProps.organisationCount}</span></li>
				<li><span>Contents</span><span className={styles.infoContainerValue}>{userProps.contentCount}</span></li>
			</ul>
		</div>
	)
} 

export default ProfileSummaryCard;