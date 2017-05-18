import React , {Component} from 'react';
import {Link} from 'react-router';
import styles from 'styles/components/common/tabContainer';
import Routes from 'routes';
import {replaceParamInRoot} from 'utils';
class TabContainer extends Component{
	constructor(props){
		super(props);
		this.state={

		}
	}
	render(){
		return(
				<div className={`${styles.tabContainer}`}>
					<ul className={`nav ${styles.navTabs} col-sm-6 col-xs-12 col-sm-offset-3`}>
  						<li role="presentation"><Link activeClassName={styles.active} to={replaceParamInRoot(Routes.profileAbout,'username','user')}>About</Link></li>
						<li role="presentation"><Link activeClassName={styles.active} to={replaceParamInRoot(Routes.profileOrganization,'username','user')}>Organisations</Link></li>
					</ul>
				</div>

			)
	}
}

export default TabContainer;