import React from 'react';

const NoMatch = () => (
	<div className="container">
		<div className="row">
	  	<div className="col s12 center">
		  	<img src="http://res.cloudinary.com/di0vizmtw/image/upload/v1468957630/errorFinal1_vrspng.png" className="responsive-img" style={{marginTop: '10%'}}/>
	  	</div>
	  	<div className="center">
		  	<a href="http://jrdev-app.herokuapp.com" className="responsive-img" style={{borderStyle: 'solid', borderWidth: '2px', borderRadius: '4px', borderColor: 'black', color: 'black', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', cursor: 'pointer'}}>Home</a>
		  </div>
	  </div>
	</div>
)

export default NoMatch;

