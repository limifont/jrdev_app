const auth = (state = [], action) => {
	switch(action.type) {
		case 'LOGIN':
			return {
				isAuthenticated: true,
				id: action.id,
				apiKey: action.apiKey,
				userType: action.userType,
				token: action.token
			}
		case 'LOGOUT':
			return {
				isAuthenticated: false,
				id: null,
				apiKey: null,
				userType: null,
				token: null
			}
		default:
			return state;
	}
}

export default auth;