export const loggedIn = (id, apiKey, userType, token) => {
	return {
		type: 'LOGIN',
		id,
		apiKey,
		userType,
		token
	}
}

export const logout = () => {
	return {
		type: 'LOGOUT'
	}
}

export const handleLogin = (email, password, history) => {
	return(dispatch) => {
		$.ajax({
			url: '/users/sign_in',
			data: { user: { email, password }},
			type: 'POST',
			dataType: 'JSON'
		}).done( response => {
			localStorage.setItem('apiKey', response.api_key);
			localStorage.setItem('userId', response.id);
			localStorage.setItem('userType', response.type);
			localStorage.setItem('token', response.repl_token.msg_mac);
			localStorage.setItem('time_created', response.repl_token.time_created);
			dispatch(loggedIn(response.id, response.api_key, response.type, response.repl_token));
			history.push('/')
		}).fail( response => {
			//TODO: handle this better
			console.log(response)
		})
	}
}

export const handleLogout = (history) => {
	return(dispatch) => {
		$.ajax({
			url: '/users/sign_out',
			type: 'DELETE',
			dataType: 'JSON'
		}).done( response => {
			localStorage.removeItem('userId');
			localStorage.removeItem('apiKey');
			localStorage.removeItem('userType');
			localStorage.removeItem('token');
			dispatch(logout());
			history.push('/');
		}).fail( response => {
			console.log(response)
		})
	}
}