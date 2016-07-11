import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
		<footer className="page-footer">
		  <div className="footer-copyright">
		    <div className="container">
			    © 2016 Jr. Devs
					<Link to='/Splash' className='right'>Splash</Link>
					<Link to='/About' className='right'>About Us</Link>
		  	</div>
		  </div>
		</footer>
)

export default Footer;