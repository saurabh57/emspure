import React,{Component} from 'react';
import styles from 'styles/components/common/card';
import * as CARD_COMPONENTS from 'components/cards';
import Icon from 'components/common/Icon';
import Ribbon from 'components/common/Ribbon';
import {showModal} from 'actions/modalAction';

class Card extends Component{
	constructor(props){
		super(props);
		this.state = {
		    personalDetailEditMode: false,
			educationDetailEditMode: false,
			contactDetailEditMode: false
		};
		this.handleEditClick = this.handleEditClick.bind(this);
	}
	handleEditClick(){
		const {dispatch} = this.props;
		dispatch(showModal({
			modalType:'success'
		}))
	}
	render(){
		const CardComponent = CARD_COMPONENTS[this.props.cardComponent];
		return (
				<div className={styles.cardContainer}>
					<div className={styles.cardRibbonContainer}>
						<div className={styles.cardTitle}>{this.props.title}</div>
						<span onClick={this.handleEditClick} className={`${styles.customEdit} ${styles.cardEditButton}`}>
							<Icon iconClass={`fa-pencil fa-lg`}/>
						</span>
					</div>
					<CardComponent {...this.props}/>
				</div>
			)
	}
}

export default Card;
