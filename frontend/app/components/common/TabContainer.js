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
		const {headerLinks} = this.props;
		return(
				<div className={`${styles.tabContainer}`}>
					<ul className={`nav ${styles.navTabs} col-sm-6 col-xs-12 col-sm-offset-3`}>
						{
							headerLinks[1].subTab.map((item,index) => {
								return <li key={index} role="presentation"><Link activeClassName={styles.active} to={replaceParamInRoot(item.toLink,'username','user')}>{item.displayText}</Link></li>
							})
						}
					</ul>
				</div>

			)
	}
}

export default TabContainer;