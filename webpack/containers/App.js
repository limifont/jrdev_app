import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { connect } from 'react-redux';
import { loggedIn, logout } from '../components/auth/actions';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const userId = localStorage.getItem('userId');
		const apiKey = localStorage.getItem('apiKey');
		const userType = localStorage.getItem('userType');
		if(!this.props.auth && userId)
			this.props.dispatch(loggedIn(userId, apiKey, userType))
		else
			this.props.dispatch(logout());
	}

  render() {
		return (
		  <div>
		  	<Navbar auth={this.props.auth} history={this.props.history} />
		  	<div style={{minHeight: "82vh", marginBottom: "-50px", backgroundImage: 'assets/pattern-triangle-2-01.jpg'}}>
			    { this.props.children }
			  </div>
			  <Footer />
		  </div>
		)
	}
}

const mapStateToProps = (state) => {
	if(state.auth) {
		return {
			auth: state.auth.isAuthenticated
		}
	} else {
		return state;
	}
}

export default connect(mapStateToProps)(App);

