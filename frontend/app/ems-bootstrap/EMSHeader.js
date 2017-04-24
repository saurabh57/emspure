import React, {Component} from 'react';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import {Link} from 'react-router';

class EMSHeader extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {navbarClass} = this.props;
		return (
				<Navbar inverse collapseOnSelect fixedTop className={navbarClass}>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <a href="#">EMS-Pure</a>
				      </Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav>
				        <NavItem eventKey={1}><Link role="button" to="dashboard">Dashboard</Link></NavItem>
				        <NavItem eventKey={2}><Link role="button" to="profile">Profile</Link></NavItem>
				        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
				          <MenuItem eventKey={3.1}>Action</MenuItem>
				          <MenuItem eventKey={3.2}>Another action</MenuItem>
				          <MenuItem eventKey={3.3}>Something else here</MenuItem>
				          <MenuItem divider />
				          <MenuItem eventKey={3.3}>Separated link</MenuItem>
				        </NavDropdown>
				      </Nav>
				      <Nav pullRight>
				        <NavItem eventKey={1}><Link role="button" to="signup">Signup</Link></NavItem>
				        <NavItem eventKey={1}><Link role="button" to="signin">Signin</Link></NavItem>
				      </Nav>
				    </Navbar.Collapse>
				  </Navbar>
			)
	}
}

export default EMSHeader;