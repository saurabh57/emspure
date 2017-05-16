import React , {Component} from 'react';
import {Link} from 'react-router';
import styles from 'styles/components/common/tabContainer';
import Routes from 'routes';
class TabContainer extends Component{
	constructor(props){
		super(props);
		this.state={

		}
	}
	render(){
		return(
				<div className={`${styles.tabContainer}`}>
					<ul className={`nav ${styles.navTabs}`}>
  						<li role="presentation"><Link activeClassName={styles.active} to={Routes.profileAbout}>About</Link></li>
						<li role="presentation"><Link activeClassName={styles.active} to={Routes.profileOrganization}>Organisations</Link></li>
					</ul>
				</div>

			)
	}
}

export default TabContainer;