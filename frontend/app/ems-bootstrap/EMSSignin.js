import React,{Component} from 'react';
import {Link} from 'react-router';
import style from 'styles/emsBootstrap/emsSignin';
import {Grid, Form, Row, Col, Checkbox,Radio,ControlLabel,FormControl,FormGroup,Button,HelpBlock} from 'react-bootstrap';
class EMSSignin extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<Grid>
				    <Row className="show-grid">
				      <Col xs={12} sm={8}>
				      	<Form horizontal>
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

						    <FormGroup>
						      <Col smOffset={3} sm={9}>
						        <Checkbox>Remember me</Checkbox>
						      </Col>
						    </FormGroup>

						    <FormGroup>
						      <Col smOffset={3} sm={2}>
						        <Button type="submit">
						          Sign in
						        </Button>
						      </Col>
						      <Col sm={4} className={style.forgotPassword}>
						        <Link to="dashboard">Forgot Password</Link>
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

export default EMSSignin;