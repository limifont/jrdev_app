import React from 'react';
import { Link } from 'react-router';

class SignupLanding extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hover: '' }
		this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this)
		this.onMouseOutHandler = this.onMouseOutHandler.bind(this)
		this.displayDescription = this.displayDescription.bind(this)
	}

	onMouseEnterHandler(type){
    this.setState({
        hover: type
    });
  }

  onMouseOutHandler(){
    this.setState({
        hover: ''
    });
  }

  displayDescription(){
  	switch (this.state.hover) {
    	case 'jrdev':
    		return(<div>Here to learn how to code? With a Jr Dev account, you will have access to all exercises. Our exercises are designed for ages 10 - 15, but can be a great introduction to coding for anyone!</div>)
    	case 'mentor':
    		return(<div>Mentor accounts are for those looking to help Jr Devs. This account is ideal for parents, older siblings, tutors, or any other type of mentor. You'll be able to add Jr Devs to you mentorship and monitor their progress. Don't know how to code? Don't worry--you'll have access to all the exercises too!</div>)
    	case 'educator':
    		return(<div>Educator accounts are for those looking to teach groups of kids. Educators can organize their kids into classrooms, see classroom statistics, and track individual progress. Just like the other accounts, an Educator has access to all exercises.</div>)
    	default:
    		return(<div></div>)
    }
  }

	render() {
		return(
			<div className='container center'>

				<h1>Sign up</h1>
				<br/>
				<h5>Who are you?</h5>
				<br/>
					<div className='row'>

						<div className='col s12 m4'>
							<Link to='/signup/Jrdev' onMouseEnter={() => this.onMouseEnterHandler('jrdev')} onMouseOut={this.onMouseOutHandler}>
						  	<i className="large material-icons" id='jrdev_symbol'>sentiment_very_satisfied</i>
					  	<p id='jrdev_symbol'>JrDev</p>
						  </Link>
					  </div>

					  <div className='col s12 m4'>
						  <Link to='/signup/Mentor' onMouseEnter={() => this.onMouseEnterHandler('mentor')} onMouseOut={this.onMouseOutHandler}>
					  		<i className="large material-icons" id='mentor_symbol'>supervisor_account</i>
					  		<p id='mentor_symbol'>Mentor</p>
					  	</Link>
					  </div>

					  <div className='col s12 m4'>
					  	<Link to='/signup/Educator' onMouseEnter={() => this.onMouseEnterHandler('educator')} onMouseOut={this.onMouseOutHandler}>
					 			<i className="large material-icons" id='educator_symbol'>school</i>
					 			<p id='educator_symbol'>Educator</p>
					  	</Link>
					  </div>
					  {this.displayDescription()}
				  </div>
			</div>
		)
	}
}

export default SignupLanding;