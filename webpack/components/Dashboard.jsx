import React from 'react';
import JrdevDashboard from './JrdevDashboard'
import MentorDashboard from './MentorDashboard'
import EducatorDashboard from './EducatorDashboard'

class Dashboard extends React.Component {
  constructor(props) {
      super(props);
      this.displayDashboard = this.displayDashboard.bind(this)
  }

  displayDashboard() {
    let userType = this.props.authData.userType
    let id = this.props.authData.id
    if( userType === "Jrdev") {
      return( 
        <JrdevDashboard id={id} />
      )
    } else if(userType === "Mentor") {
      return(
        <MentorDashboard id={id} />
      )
    } else {
      return(
        <EducatorDashboard id={id} />
      )
    }
  }

  render() {
  	return( 
  		<div className="container">
        <div style={{width: '100%'}}>
          <div className="col s12 m12 center" style={{marginTop: "15px"}}>
            <h2 className="white-text" style={{margin: "0", fontWeight: "900"}}></h2>
          </div>
            {this.displayDashboard()}
        </div>
      </div>
		)
  }
}

export default Dashboard;
