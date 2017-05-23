import React,{Component} from 'react';
import styles from 'styles/components/common/card';
import * as CARD_COMPONENTS from 'components/cards';
import Icon from 'components/common/Icon';
import Ribbon from 'components/common/Ribbon';
import {showModal} from 'actions/modalAction';

class Card extends Component{
	constructor(props){
		super(props);
		this.handleEditClick = this.handleEditClick.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	handleEditClick(){
		const {dispatch} = this.props;
		// dispatch(showModal({
		// 	modalType:'confirm',
		// 	modalComponent:'TestModal',
		// 	modalProps:{
		// 		text:"Are you sure?"
		// 	}
		// }));

		dispatch(showModal({
			modalType:'modal',
			modalComponent:'TestModal',
			modalProps:{
				text:"Are you sure?",
				title:"Edit Personal Info",
				onSubmit:this.onSubmit
			}
		}));
	}
	onSubmit(){
		console.log("clicked submit");
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
