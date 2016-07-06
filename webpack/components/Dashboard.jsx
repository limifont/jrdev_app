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
    			<JrdevDashboard id={id}/>
  			)
    	} else if(userType === "Mentor") {
    		return(
    			<MentorDashboard id={id}/>
    		)
    	} else {
    		return(
    			<EducatorDashboard id={id}/>
    		)
    	}
    }
}

export default Dashboard;
