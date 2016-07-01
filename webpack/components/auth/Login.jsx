import React from 'react';
import { connect } from 'react-redux';
// TODO: import { handleLogin } from './actions'

class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(e) {
		e.prevenDefault();
		const email = this.refs.email.value
		const passwrod = this.refs.password.value
		this.props.dispatch(handleLogin(email, password, this.props.history))
	}

	render() {
		return(
			<div>
				<h3>Login</h3>
				<form onSubmit={ this.handleSubmit.bind(this) } >
					<input type='email' placeholder='Email' ref='email' required />
					<input type='password' placeholder='Password' ref='password' require />
					<input type='submit' className='btn' value='login' />
				</form>
			</div>
		)
	}
}

export default connect()(Login);