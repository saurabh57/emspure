import React , {Component} from 'react';
import ProfilePic from './common/ProfilePic';
import styles from 'styles/components/profileSummaryCard'
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
		return(
			<div className={`${styles.profileSummaryCard} row`} style={this.state.styleScroll}>
				<ProfilePic />
				<BasicInfo />
			</div>
		)
	}
}

const BasicInfo = () =>{
	return(
		<div className={`${styles.infoContainerWrapper} col-xs-9 col-sm-12`}>
			<ul className={styles.infoContainer}>
				<li>Arvind Singh</li>
				<li className={styles.infoContainerHeader}>ABOUT</li>
				<li className={styles.infoContainerContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
				<li className={styles.infoContainerFooter}>Read More</li>
				<hr />
				<li><span>ORGANISATIONS</span><span className={styles.infoContainerValue}>10</span></li>
				<li><span>CONTENTS</span><span className={styles.infoContainerValue}>25</span></li>
			</ul>
		</div>
	)
} 

export default ProfileSummaryCard;