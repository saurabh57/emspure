//Creating Footer
import React,{Component} from 'react';
import style from 'styles/components/footer';

class Footer extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
				<footer className={`${style.mainfooter} row`}>
					<div className="links"></div>
					<div className="copyright"></div>
				</footer>
			)
	}
}

export default Footer; 
