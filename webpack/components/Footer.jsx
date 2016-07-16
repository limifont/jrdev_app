import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
		<footer className="page-footer cyan">
		  <div className="footer-copyright cyan" >
		    <div className="container " >
			    © 2016 Jr. Devs
					<Link to='/about_us' className='right white-text'>About Us</Link>
		  	</div>
		  </div>
		</footer>
)

export default Footer;