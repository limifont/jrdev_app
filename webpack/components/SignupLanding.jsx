import React from 'react';
import { Link } from 'react-router';

var ReactTooltip = require("react-tooltip")

class SignupLanding extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return(
			<div id="signup-landing" style={{width: '100vw'}}>
				<div className="valign-wrapper" style={{width: '100%', height: '100%', background: 'rgba(0,0,0,.6)', height: '100vh'}}>
			    
			    <div id="content" className="container valign">
			      <div className="row">
			      	
			      	<div className="col s12 m10 offset-m1 center white-text">
			      		<h4 style={{ textTransform: 'uppercase'}}>Who are you?</h4>
			      	</div>
			      
				      <div className="row">
				      	
				      	<div className="col s12 m4 center white-text">
		      				<Link to='/signup/Jrdev' data-tip data-for='jrdev' >
		      			  	<i className="large material-icons orange-text" id='jrdev_symbol'>sentiment_very_satisfied</i>
		      		  		<p id='jrdev_symbol' className="white-text">JrDev</p>
		      			  </Link>
		      			  <ReactTooltip id='jrdev' type='success' place="top" multiline >
		      				  <p className='gray-text'>Here to learn how to code? With a Jr Dev account, <br/> you will have access to all exercises. Our exercises are designed <br/> for ages 10 - 15, but can be a great introduction to coding for anyone!</p>
		      				</ReactTooltip>
				      	</div>

				      	<div className="col s12 m4 center white-text">
		      			  <Link to='/signup/Mentor' data-tip data-for='mentor'>
		      		  		<i className="large material-icons orange-text" id='mentor_symbol'>supervisor_account</i>
		      		  		<p id='mentor_symbol' className="white-text">Mentor</p>
		      		  	</Link>
		      		  	<ReactTooltip id='mentor' type='success' place="top" multiline >
		      				  <p className='gray-text'>Mentor accounts are for those looking to help Jr Devs.<br/> This account is ideal for parents, older siblings, tutors, or <br/> any other type of mentor. You'll be able to add Jr Devs to you <br/> mentorship and monitor their progress. Don't know how to code? <br/>Don't worry--you'll have access to all the exercises too!</p>
		      				</ReactTooltip>
				      	</div>

				      	<div className="col s12 m4 center white-text">
		      		  	<Link to='/signup/Educator' data-tip data-for='educator'>
		      		 			<i className="large material-icons orange-text" id='educator_symbol'>school</i>
		      		 			<p id='educator_symbol' className="white-text">Educator</p>
		      		  	</Link>
		      		  	<ReactTooltip id='educator' type='success' place="top" multiline >
		      				  <p className='gray-text'>Educator accounts are for those looking to teach <br/>groups of kids. Educators can organize their kids into classrooms,<br/> see classroom statistics, and track individual progress. Just like the <br/> other accounts, an Educator has access to all exercises.</p>
		      				</ReactTooltip>
				      	</div>


				      </div>
			      </div>
			    </div>
			  
			  </div>			
			</div>


			
		)
	}
}

export default SignupLanding;