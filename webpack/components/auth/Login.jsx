import React from 'react';
import { connect } from 'react-redux';
import { handleLogin } from './actions'
import { Link } from 'react-router';

class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if(this.props.auth){
			this.props.history.push('/')
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		const email = this.refs.email.value
		const password = this.refs.password.value
		this.props.dispatch(handleLogin(email, password, this.props.history))
	}

	displayError() {
		if(this.props.loginFail) {
			return (
				<div className="col s8 offset-s2 m6 offset-m3 center" style={{backgroundColor: "rgba(255,0,0,0.2)", minHeight: "50px", borderRadius: "10px", marginTop: "30px"}}>
					<p style={{color: "red"}}>Email or Password Incorrect</p>
				</div>	
			)
		}
	}

	render() {
		return(
			<div id="login-img" style={{width: '100vw'}}>
				<div className="valign-wrapper" style={{width: '100%', height: '100%', background: 'rgba(0,0,0,.6)', height: '100vh'}}>
			    
			    <div id="content" className="container valign">
			      <div className="row">
			      	
			      
				      <div className="row">
				      	<div className="col s12 m10 offset-m1 center">
				      		<form onSubmit={ this.handleSubmit.bind(this) } >
			      				<div className="input-field col s12">
			      					<div className="input-field col s12">
			      						<input type='email' className="orange-text" placeholder='Email' ref='email' required />
			      						<input type='password' className="orange-text" placeholder='Password' ref='password' require />
			      						<input type='submit' className='btn transparent col s12' style={{border: "2px solid white"}} value='login' />
			      						<p className="col s12 center white-text" style={{fontSize: '.8em'}}>Don't have an account? Sign up <Link to='/signup_landing' className='white-text' style={{textDecoration: 'underline'}}>here</Link>!</p>
			      					</div>
			      				</div>
			      			</form>
			      				{this.displayError()}
				      	</div>
				      </div>
			      </div>
			    </div>
			  
			  </div>			
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	if(state.auth) {
		return {
			auth: state.auth.isAuthenticated,
			loginFail: state.auth.loginFail
		}
	} else {
		return state;
	}
}

export default connect(mapStateToProps)(Login);