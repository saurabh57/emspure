import React , {Component} from 'react';
import styles from 'styles/components/forms';
class DropDown extends Component{
	constructor(props){
		super(props)

		this.state={
			value:this.props.name
		}
		this.setValue = this.setValue.bind(this)
	}
	setValue(){
		const {onChange} = this.props;
		this.setState({value:this.refs.select.value})
		onChange && onChange(this.refs.select.value)
	}
	render(){
		const {name,enable,data,selected} = this.props;
		return(
				<div className={styles.dropDown}>
	                <span className={`${styles.customSelect} ${styles.customSelectDisabledOption}`}>
	                	<span className={`${styles.customSelectInner}`}>{selected || this.state.value}</span>
	                </span>
	                <select onChange={this.setValue} disabled={!enable} value={selected || this.state.value} ref="select">
	                	<option value={name} data-id='_' disabled>{name}</option>
	                	{data.map(opt => {
		                                return <option key={opt.value} value={`${opt.value}`}>{opt.text}</option>;
		                            })
	                	}
	                </select>
	            </div>
		)
	}
}

export default DropDown;