import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from './auth/actions';
import { connect } from 'react-redux';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$('.button-collapse').sideNav({
	    closeOnClick: true
		});    
	}

	logout(e) {
		e.preventDefault();
		this.props.dispatch(handleLogout(this.props.history));
	}

	// TODO: add the three users and replace admin
	authLink(){
		if(this.props.auth)
			return([<li className="white-text"><Link to="/">Dashboard</Link></li>,
							<li className="white-text"><Link to="/sandbox">Sandbox</Link></li>,
              <li><a href='#' onClick={this.logout.bind(this)}>Logout</a></li>])
		else {
			return([<li><Link to='/login'>Login</Link></li>,
							<li><Link to='/signup_landing' >Signup</Link></li>])
	}
}

	render() {
		return(
			<nav>
	      <div className="nav-wrapper cyan">
			    <div className="container">
			      <Link to='/splash' className='brand-logo'>JrDevs</Link>
			      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
			      <ul className="right hide-on-med-and-down">
			        {this.authLink()}
			      </ul>
			      <ul className="side-nav" id="mobile-demo">
			      	{this.authLink()}
			      </ul>	
			    </div>
        </div>
      </nav>
    )
	}
}

export default connect()(Navbar);