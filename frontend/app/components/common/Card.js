import React,{Component} from 'react';
import styles from 'styles/components/common/card';
import * as CARD_COMPONENTS from 'components/cards';
import Icon from 'components/common/Icon';
import Ribbon from 'components/common/Ribbon';
//import EMSButton from 'components/ems-bootstrap/EMSButton';
//<li><Icon iconClass="pencil-square-o"/></li>		
//<div>
	//<button type="button" className={`${styles.btnDefault} btnDefault btn btn-default`}>Cancel</button>
	//<button type="button" className={`${styles.btnDefault} btnDefault btn btn-default`}>Save</button>
//</div>

//<span className={styles.cardTitle}>{this.props.title}</span>			


class Card extends Component{
	constructor(props){
		super(props);
		this.state = {
		    personalDetailEditMode: false,
			educationDetailEditMode: false,
			contactDetailEditMode: false
		};
	}
	getComponent(title) {
		console.log(title);
	}
	render(){
		const CardComponent = CARD_COMPONENTS[this.props.cardComponent];
		return (
				<div className={styles.cardContainerss}>
					<div className={styles.cardContainer}>
						<div className={styles.cardRibbonContainer}>
							<Ribbon ribbonHeader={this.props.title} />
							<span onClick={this.getComponent.bind(this, this.props.title)} className={styles.cardEditButton}>
								<Icon iconClass="pencil-square-o fa-lg"/>
							</span>
						</div>
						<CardComponent {...this.props}/>
					</div>
				</div>
			)
	}
}

export default Card;