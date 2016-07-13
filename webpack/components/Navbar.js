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
			return([<li><a href='#' onClick={this.logout.bind(this)}>Logout</a></li>,
              <li className="white-text"><Link to="/">Dashboard</Link></li>])
		else {
			return([<li><Link to='/login'>Login</Link></li>,
							<li><Link to='/Splash'>Signup</Link></li>])
	}
}

	render() {
		return(
			<header>
		      <div className="navbar-fixed">
	          <nav className='cyan'>
	            <div className="nav-wrapper container">
	              <Link to='/' className='brand-logo'>Jr. Devs</Link>
	              <ul id="nav-mobile" className="right">
	                { this.authLink() }
	              </ul>
	            </div>
	          </nav>
	        </div>



	    </header>
    )
	}
}

export default connect()(Navbar);