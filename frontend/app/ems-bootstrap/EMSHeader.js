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
				        <NavItem role="presentation"><Link role="button" to="dashboard">Dashboard</Link></NavItem>
				        <NavItem role="presentation"><Link role="button" to="profile">Profile</Link></NavItem>
				      </Nav>
				      <Nav pullRight>
				        <NavItem role="presentation"><Link role="button" to="signup">Signup</Link></NavItem>
				        <NavItem role="presentation"><Link role="button" to="signin">Signin</Link></NavItem>
				      </Nav>
				    </Navbar.Collapse>
				  </Navbar>
			)
	}
}

export default EMSHeader;