import React , {Component} from 'react';
import {Link} from 'react-router';
import styles from 'styles/components/common/tabContainer';
import Routes from 'routes';
class TabContainer extends Component{
	constructor(props){
		super(props);
		this.state={
			activeTabIndex:0
		}
	}
	selectTab(index){
		this.setState({
			activeTabIndex:index
		})
	}
	render(){
		return(
				<div className={`${styles.tabContainer} col-sm-9`}>
					<ul className="nav nav-tabs">
  						<li role="presentation" onClick={()=>this.selectTab(0)} className={`${this.state.activeTabIndex == 0 ? 'active' : ''}`}><Link to={Routes.profileAbout}>About</Link></li>
						<li role="presentation" onClick={()=>this.selectTab(1)} className={`${this.state.activeTabIndex == 1 ? 'active' : ''}`}><Link to={Routes.profileOrganization}>Organisations</Link></li>
					</ul>
					<div>{this.props.children}</div>
				</div>

			)
	}
}

export default TabContainer;