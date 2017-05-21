import React, {Component} from 'react';
import {Link} from 'react-router';
import styles from 'styles/emsBootstrap/emsHeader';
import Routes from 'routes';
import {replaceParamInRoot} from 'utils';
class EMSHeader extends Component{
	constructor(props){
		super(props);
		this.state={

		}
	}
	render(){
		const {user, headerLinks} = this.props;
		return (
				<nav className={`navbar navbar-default ${styles.emsheader}`}>
				  <div className={`container-fluid ${styles.emsheaderContent}`}>
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <Link className={`navbar-brand ${styles.navbarBrand}`} to={Routes.home}>EMSpure</Link>
				    </div>

				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      <form className="navbar-form navbar-left">
				        <div className="form-group">
				          <input type="text" className="form-control" placeholder="Search" />
				        </div>
				        <button type="submit" className="btn btn-default">Submit</button>
				      </form>
  				      <ul className={`nav navbar-nav ${styles.headerTabs}`}>
				      { /*
				        <li><Link activeClassName={styles.active} className={styles.headerTabLink} to={Routes.dashboard}>Dashboard</Link></li>
				        <li><Link activeClassName={styles.active} className={styles.headerTabLink} to={replaceParamInRoot(Routes.profile,'username','user')}>Profile</Link></li>
				      	*/
				  	  }
				      {
				        Object.keys(headerLinks).map((key, index) => {
				        	const data = Object.assign({},headerLinks[key]);
				        	return ((data.role && user && user.id) || !data.role) && (
				        		<li key={index}>
				        			<Link
				        				activeClassName={styles.active}
				        				className={styles.headerTabLink}
				        				to={replaceParamInRoot(data.toLink,'username','user')}
				        			>
				        				{data.displayText}
				        			</Link>
				        		</li>
				        	);
				        })
				      }
				      </ul>
				      <ul className={`nav navbar-nav navbar-right`}>
				        <li><Link className={styles.headerNavLink} to={Routes.signin}>Log In</Link></li>
				      </ul>
				    </div>
				  </div>
				</nav>
			)
	}
}

export default EMSHeader;