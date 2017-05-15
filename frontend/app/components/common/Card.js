//Creating Footer
import React,{Component} from 'react';
import styles from 'styles/components/common/card';
import * as CARD_COMPONENTS from 'components/cards';
import Icon from 'components/common/Icon';
//import EMSButton from 'components/ems-bootstrap/EMSButton';
//<li><Icon iconClass="pencil-square-o"/></li>						


class Card extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const CardComponent = CARD_COMPONENTS[this.props.cardComponent];
		return (
				<div className={styles.cardContainer}>
					<div>
						<span className={styles.cardTitle}>{this.props.title}</span>
						<span className={styles.cardEditButton}>Edit</span>
					</div>
					<CardComponent {...this.props}/>
					<div>
						<button type="button" className={`${styles.btnDefault} btnDefault btn btn-default`}>Cancel</button>
						<button type="button" className={`${styles.btnDefault} btnDefault btn btn-default`}>Save</button>
					</div>
				</div>
			)
	}
}

export default Card; 
