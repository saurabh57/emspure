//Creating Footer
import React,{Component} from 'react';
//import style from 'styles/components/card';
import * as CARD_COMPONENTS from 'components/cards';
import Icon from 'components/common/Icon';
class Card extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const CardComponent = CARD_COMPONENTS[this.props.cardComponent];
		return (
				<div>
					<div>
						<span>{this.props.title}</span>
						<ul>
							<li><Icon iconClass="pencil-square-o"/></li>
							<li>More</li>
						</ul>
					</div>
					<CardComponent {...this.props}/>
					<div><button>Save</button><button>Cancel</button></div>
				</div>
			)
	}
}

export default Card; 
