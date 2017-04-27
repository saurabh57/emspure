import React, {Component} from 'react';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import EMSButton from './EMSButton';
import {Link} from 'react-router';

class EMSHeader extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {navbarClass} = this.props;
		return (
				<Navbar collapseOnSelect fixedTop className={navbarClass}>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <Link to="/">emspure</Link>
				      </Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav>
				        <li role="presentation"><Link role="button" to="dashboard">Dashboard</Link></li>
				        <li role="presentation"><Link role="button" to="profile">Profile</Link></li>
				      </Nav>
				      <Nav pullRight>
				        <li role="presentation"><Link role="button" to="signup">Signup</Link></li>
				        <li role="presentation"><Link role="button" to="signin">Signin</Link></li>
				        <li role="presentation"><Link role="button" to="signin">Already have an account</Link></li>
				      </Nav>
				    </Navbar.Collapse>
				  </Navbar>
			)
	}
}

export default EMSHeader;