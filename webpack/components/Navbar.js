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
							<li><Link to='/admin'>Admin</Link></li>])
		else {
		return(
			<li><Link to='/login'>Login</Link></li>
		)
	}
}

	render() {
		return(
			<header>
	      <div className="navbar-fixed">
	          <nav className='cyan darken-3'>
	            <div className="nav-wrapper container">
	              <Link to='/' className='brand-logo'>Jr. Devs</Link>
	              <ul id="nav-mobile" className="right">
	                <li className="white-text"><Link to="/">Home</Link></li>
	                <li className="white-text"><Link to="/">Dashboard</Link></li>
	                <li><i className="material-icons dropdown-button white-text" data-activates="dropdown1">more_vert</i></li>
	                <ul id="dropdown1" className="dropdown-content cyan-text">
	                	{ this.authLink() }
	                </ul>
	              </ul>
	            </div>
	          </nav>
	        </div>
	    </header>
    )
	}
}

export default connect()(Navbar);