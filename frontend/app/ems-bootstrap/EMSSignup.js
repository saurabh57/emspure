import React,{Component} from 'react';
import {Link} from 'react-router';
import {Grid, Form, Row, Col, Checkbox,Radio,ControlLabel,FormControl,FormGroup,Button,HelpBlock} from 'react-bootstrap';
import EMSButton from './EMSButton';
import style from 'styles/emsBootstrap/emsSignin';
class EMSSignup extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<Grid>
				    <Row className="show-grid">
				      <Col xs={12} sm={8} smOffset={2}>
				      	<Form horizontal>
				      		<FormGroup controlId="formHorizontalFirstName">
						      <Col componentClass={ControlLabel} sm={3}>
						        First Name
						      </Col>
						      <Col sm={9}>
						        <FormControl type="text" placeholder="First Name" required />
						      </Col>
						    </FormGroup>
				      		<FormGroup controlId="formHorizontalLastName">
						      <Col componentClass={ControlLabel} sm={3}>
						        Last Name
						      </Col>
						      <Col sm={9}>
						        <FormControl type="text" placeholder="Last Name" />
						      </Col>
						    </FormGroup>
						    <FormGroup>
						    	<Col componentClass={ControlLabel} sm={3}>
						        	Gender
						      	</Col>
						      	<Col sm={9}>
						        	<Radio name="radioGroup" inline>
							        	Male
							      	</Radio>
							      	{' '}
							      	<Radio name="radioGroup" inline>
							        	Female
							      	</Radio>
						      	</Col>
						    </FormGroup>

						    <FormGroup controlId="formHorizontalPhoneNumber">
						      <Col componentClass={ControlLabel} sm={3}>
						        Phone
						      </Col>
						      <Col sm={9}>
						        <FormControl type="number" placeholder="Phone Number" />
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="formHorizontalEmail">
						      <Col componentClass={ControlLabel} sm={3}>
						        Email
						      </Col>
						      <Col sm={9}>
						        <FormControl type="email" placeholder="Email" />
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="formHorizontalPassword">
						      <Col componentClass={ControlLabel} sm={3}>
						        Password
						      </Col>
						      <Col sm={9}>
						        <FormControl type="password" placeholder="Password" />
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="formHorizontalConfirmPassword">
						      <Col componentClass={ControlLabel} sm={3}>
						        Confirm Password
						      </Col>
						      <Col sm={9}>
						        <FormControl type="password" placeholder="Confirm Password" />
						      </Col>
						    </FormGroup>

						    <FormGroup>
						      <Col smOffset={3} sm={9}>
						        <Checkbox>Remember me</Checkbox>
						      </Col>
						    </FormGroup>

						    <FormGroup>
						      <Col smOffset={3} sm={9}>
						        <EMSButton type="submit">
						          Sign up
						        </EMSButton>
						      </Col>
						    </FormGroup>
						    <FormGroup>
						      <Col smOffset={3} sm={4} className={style.forgotPassword}>
						        <Link to="signin">Already have an account?</Link>
						      </Col>
						    </FormGroup>
						  </Form>
				      </Col>
				    </Row>
				</Grid>
			)
	}
}

const FieldGroup = (props) => {
const  { id, label, help} = props;
   return (
	    <FormGroup controlId={id}>
	      <ControlLabel>{label}</ControlLabel>
	      <FormControl {...props} />
	      {help && <HelpBlock>{help}</HelpBlock>}
	    </FormGroup>
	  );
}

export default EMSSignup;