import React , {Component} from 'react';
import styles from 'styles/components/common/expander';
class Expander extends Component{
	constructor(props){
		super(props);
		this.state = {
			expanded: false
		};
		this.getInitialState = this.getInitialState.bind(this);
		this.toggleText = this.toggleText.bind(this);
		this.getExpanderText = this.getExpanderText.bind(this);
	}
	getInitialState() {
        return {
           expanded: false
       };
    }

    toggleText() {
    	if(this.state.expanded){
    		this.setState({
	            expanded: false
	        });
    	} else {
    		this.setState({
	            expanded: true
	        });
    	}
               
    }

    getExpanderText(expText) {
    	let divText = expText;
        if (!this.state.expanded) {
        	divText = expText.substring(0, 86);
        }
        return <div className = {styles.expanderContent}> {divText} </div>;
    }

	render(){
		const expText = this.props.expText;
		var expandedDiv = this.getExpanderText(expText);
	    return (
	        <div>
	            { expandedDiv }
	            <a onClick={this.toggleText}>Read more</a>
	        </div>
	    );
	}
}

export default Expander;