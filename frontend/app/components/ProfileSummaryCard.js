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
			<div className={styles.profileSummaryCard} style={this.state.styleScroll}>
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