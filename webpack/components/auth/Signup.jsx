import React from 'react';
import { connect } from 'react-redux';
import { handleLogin } from './actions';
import { browserHistory } from 'react-router' 
import { Link } from 'react-router';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = { errors: [] }
		this.displayErrors = this.displayErrors.bind(this)
	}

	checkParams() {
		if(!["Mentor","Jrdev","Educator"].includes(this.props.params.type)) {
			browserHistory.push('/splash')
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		let password = this.refs.password.value
		let passwordConfirmation = this.refs.passwordConfirmation.value
		if(password === passwordConfirmation) {
			let name = this.refs.name.value
			let username = this.refs.username.value
			let email =  this.refs.email.value		
			let type = this.props.params.type
			$.ajax({
				url:'/users',
				type: 'POST',
				dataType: 'JSON',
				data: { user: { name, username, email, password, passwordConfirmation, type }}
			}).done( data => {
				this.props.dispatch(handleLogin(email, password, this.props.history))
			}).fail( data => {
				let response = data.responseJSON.errors
				let errors = []
				for(let i in response ) {
					errors.push(`${i} ${response[i][0]}`)
				}
				this.setState({ errors })
				console.log(data)
			})
		} else {
			this.setState({
				errors: [
					"Password and Password Confirmation Must Match"
				]
			})
		}
	}

	displayErrors() {
		if(this.state.errors.length > 0) {
			let messages =  this.state.errors.map( error => {
				return(<p className="center" style={{color: "red"}}>{error}</p>)
			})
			return(
				<div className="col s8 offset-s2 m6 offset-m3 center" style={{backgroundColor: "rgba(255,0,0,0.2)", minHeight: "50px", borderRadius: "10px", marginTop: "30px"}}>
					{messages}
				</div>	
			)
		}
	}

	render() {
		this.checkParams()
		return (
			<div id="signup-img" style={{width: '100vw'}}>
				<div className="valign-wrapper" style={{width: '100%', height: '100%', background: 'rgba(0,0,0,.6)', height: '100vh'}}>
			    
			    <div id="content" className="container valign">
			      <div className="row">
			      	<div className="col s12 m10 offset-m1 center white-text">
			      		<h4 style={{ textTransform: 'uppercase'}}>Sign Up as {this.props.params.type}</h4>
			      	</div>
			      
				      <div className="row">
				      	<div className="col s12 m10 offset-m1 center white-text">
				      		<form onSubmit={ this.handleSubmit.bind(this) } >
			      				<div className="input-field col s12">
			      					<input type='text' className="orange-text" placeholder='Name' ref='name' required />
			      					<input type='text' className="orange-text" placeholder='Username' ref='username' required />
			      					<input type='email' className="orange-text" placeholder='Email' ref='email' required />
			      					<input type='password' className="orange-text" placeholder='Password' ref='password' required pattern=".{6,}" title="Password must be 6 characters or more"/>
			      					<input type='password' className="orange-text" placeholder='Password Confirmation' ref='passwordConfirmation' required pattern=".{6,}" title="Password Confirmation must be 6 characters or more and must match Password" />
			      					<input type='submit' className='btn transparent col s12' style={{border: "2px solid white"}} value='Start Coding!' />
			      					<p className="col s12 center white-text" style={{fontSize: '.8em'}}>Already have an account? Log in <Link to='/login' className='white-text' style={{textDecoration: 'underline'}}>here</Link>!</p>
			      				</div>
			      			</form>
			      				{this.displayErrors()}
				      	</div>
				      </div>
			      </div>
			    </div>
			  
			  </div>			
			</div>
		)
	}
}

export default connect()(Signup); 