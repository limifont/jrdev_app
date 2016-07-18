import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from './auth/actions';
import { connect } from 'react-redux';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	logout(e) {
		e.preventDefault();
		this.props.dispatch(handleLogout(this.props.history));
	}

	// TODO: add the three users and replace admin
	authLink(){
		if(this.props.auth)
			return([<li className="white-text"><Link to="/">Dashboard</Link></li>,
              <li><a href='#' onClick={this.logout.bind(this)}>Logout</a></li>])
		else {
			return([<li><Link to='/login'>Login</Link></li>,
							<li><Link to='/signup_landing' >Signup</Link></li>])
	}
}

	render() {
		return(
			<header>
		      <div className="navbar">
	          <nav className='cyan'>
	            <div className="nav-wrapper container">
	              <Link to='/' className='brand-logo'>JrDevs</Link>
	              <ul id="nav-mobile" className="right hide-on-med-and-down">
	                { this.authLink() }
	              </ul>
	              <ul className="right hide-on-med-and-up">
	              	<i className="material-icons">menu</i>
	              </ul>
	            </div>
	          </nav>
	        </div>
	    </header>
    )
	}
}

export default connect()(Navbar);