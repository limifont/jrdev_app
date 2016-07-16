import React from 'react';
import { connect } from 'react-redux';
import { handleLogin } from './actions'

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
				<div className="col m6 offset-m3 center" style={{backgroundColor: "rgba(255,0,0,0.2)", minHeight: "50px", borderRadius: "10px", marginTop: "30px"}}>
					<p style={{color: "red"}}>Email or Password Incorrect</p>
				</div>	
			)
		}
	}

	render() {
		return(
			<div className='center-align container'>
				<h3>Login</h3>
				<div className="row">
					<form onSubmit={ this.handleSubmit.bind(this) } >
						<div className="input-field col s6 offset-s3">
							<input type='email' placeholder='Email' ref='email' required />
							<input type='password' placeholder='Password' ref='password' require />
							<input type='submit' className='btn' value='login' />
						</div>
					</form>
					{this.displayError()}
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