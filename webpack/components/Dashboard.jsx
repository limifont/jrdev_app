import React from 'react';
import JrdevDashboard from './JrdevDashboard'
import MentorDashboard from './MentorDashboard'
import EducatorDashboard from './EducatorDashboard'

class Dashboard extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    let userType = this.props.authData.userType
    let id = this.props.authData.id
    if( userType === "Jrdev") {
    	return( 
    		<div className="container">
          <JrdevDashboard id={id}/>
        </div>
  		)
  	} else if(userType === "Mentor") {
  		return(
  			<div className="container">
          <MentorDashboard id={id}/>
        </div>
    	)
    } else {
    	return(
        <div className="container">
    			<EducatorDashboard id={id}/>
        </div>
    	)
    }
  }
}

export default Dashboard;
