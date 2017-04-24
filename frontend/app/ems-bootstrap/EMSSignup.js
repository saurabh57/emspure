import React,{Component} from 'react';
import {Grid, Form, Row, Col, Checkbox,Radio,ControlLabel,FormControl,FormGroup,Button,HelpBlock} from 'react-bootstrap';
class EMSSignup extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<Grid>
				    <Row className="show-grid">
				      <Col xs={12} sm={8}>
				      	<Form horizontal>
				      		<FormGroup controlId="formHorizontalFirstName">
						      <Col componentClass={ControlLabel} sm={3}>
						        Name
						      </Col>
						      <Col sm={3}>
						        <FormControl type="text" placeholder="First Name" required />
						      </Col>
						      <Col sm={3}>
						        <FormControl type="text" placeholder="Middle Name" />
						      </Col>
						      <Col sm={3}>
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
						        <Button type="submit">
						          Sign up
						        </Button>
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