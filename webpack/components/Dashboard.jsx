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
    	if( userType === "Jrdev") {
    		return( 
    			<JrdevDashboard />
  			)
    	} else if(userType === "Mentor") {
    		return(
    			<MentorDashboard />
    		)
    	} else {
    		return(
    			<EducatorDashboard />
    		)
    	}
    }
}

export default Dashboard;
