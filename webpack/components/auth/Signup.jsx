import React from 'react';
import { connect } from 'react-redux';
import { handleLogin } from './actions';

class Signup extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(e) {
		e.preventDefault();
		const name = this.refs.name.value
		const username = this.refs.username.value
		const email =  this.refs.email.value		
		const password = this.refs.password.value
		const passwordConfirmation = this.refs.passwordConfirmation.value
		const type = this.props.params.type
		$.ajax({
			url:'/users',
			type: 'POST',
			dataType: 'JSON',
			data: { user: { name, username, email, password, passwordConfirmation, type }}
		}).done( data => {
			this.props.dispatch(handleLogin(email, password, this.props.history))
		}).fail( data => {
			alert('User Sign Up Failed')
			console.log(data)
		})
	}

	render() {
		return (
			<div>
				<h3>Sign Up as: {this.props.params.type}</h3>
				<form onSubmit={ this.handleSubmit.bind(this) } >
					<input type='text' placeholder='Name' ref='name' required />
					<input type='text' placeholder='Username' ref='username' required />
					<input type='email' placeholder='Email' ref='email' required />
					<input type='password' placeholder='Password' ref='password' require />
					<input type='password' placeholder='Password Confirmation' ref='passwordConfirmation' require />
					<input type='submit' className='btn' value='login' />
				</form>
			</div>
		)
	}
}

export default connect()(Signup); 