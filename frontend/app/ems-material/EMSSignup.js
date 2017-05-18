import React , {Component} from 'react';
import styles from 'styles/emsMaterial/emsSignup';
import {Link} from 'react-router';
import {InputText,DropDown,StandardButton} from 'components/common/Forms';
import PATHS from 'routes';
const accountType = [
	{
		text:'Individual',
		value:'Individual'
	},
	{
		text:'Organizational',
		value:'Organizational'
	}
]
const country=[
	{
		text:'India',
		value:'India'
	},
	{
		text:'Japan',
		value:'Japan'
	},
	{
		text:'China',
		value:'China'
	}
]

class SignUp extends Component{
	render(){
		return(
				<div className={`${styles.signUpUi} col-lg-6 col-md-8 col-sm-12`}>
					<div className={``}>
						<InputItems />
					</div>
					<div className={``}>
						<Link to={PATHS.profile}>
							<StandardButton  label='Create'></StandardButton>
						</Link>
					</div>
				</div>
			);
	}
}
const InputItems = () =>{
	return (
			<div className='row'>
				<div className='col-lg-6 col-md-6 col-sm-6 col-xm-12'>
					<InputText label='Username'
								color='grey'
								underlineColor='#d6d6d6'
								underlineWidth='2px'
								labelColor='#6a6a6a'
								/>
					<InputText label='Email Address'
								type='email'
								color='grey'
								underlineColor='#d6d6d6'
								underlineWidth='2px'
								labelColor='#6a6a6a'
								/>
					<InputText label='Password'
								type='password'
								color='grey'
								underlineColor='#d6d6d6'
								underlineWidth='2px'
								labelColor='#6a6a6a'
								/>
				</div>
				<div className='col-lg-6 col-md-6 col-sm-6 col-xm-12'>
					<DropDown   data={country} name='Country' enable={true}/>
				</div>
			</div>
		)

}
export default SignUp;