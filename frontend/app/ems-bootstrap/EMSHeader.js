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
				        <Link to="/">EMS-Pure</Link>
				      </Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav>
				        <li role="presentation"><Link role="button" to="dashboard">Dashboard</Link></li>
				        <li role="presentation"><Link role="button" to="profile">Profile</Link></li>
				      </Nav>
				      <Nav pullRight>
				        <li role="presentation"><Link role="button" to="signup"><EMSButton type="primary">Signup</EMSButton></Link></li>
				        <li role="presentation"><Link role="button" to="signin"><EMSButton type="primary">Signin</EMSButton></Link></li>
				      </Nav>
				    </Navbar.Collapse>
				  </Navbar>
			)
	}
}

export default EMSHeader;