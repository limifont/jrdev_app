export const loggedIn = (id, apiKey, userType) => {
	return {
		type: 'LOGIN',
		id,
		apiKey,
		userType
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
			localStorage.setItem('userType', response.type)
			dispatch(loggedIn(response.id, response.api_key));
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
			dispatch(logout());
			history.push('/');
		}).fail( response => {
			console.log(response)
		})
	}
}