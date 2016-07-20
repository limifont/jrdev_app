import React from 'react';
import JrdevDashboard from './JrdevDashboard';
import MentorDashboard from './MentorDashboard';
import EducatorDashboard from './EducatorDashboard';

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
        <div className="container">
          <JrdevDashboard id={id} />
        </div>
      )
    } else if(userType === "Mentor") {
      return(
        <div className="container">
          <MentorDashboard id={id} />
        </div>
      )
    } else {
      return(
        <div className="container" style={{paddingTop: '5vh'}}>
          <EducatorDashboard id={id} />
        </div>
      )
    }
  }

  render() {
  	return( 
      <div>
        <div style={{backgroundImage: 'url(http://res.cloudinary.com/di0vizmtw/image/upload/v1468821593/splashpic2_copy_ber9cl.jpg)', height: '45vh', marginBottom: '5vh'}}>
          <div style={{width: '100%', height: '100%', background: 'rgba(0,0,0,.3)'}}>
            <div className="container">
              <div className="row">
                <div className="col s12 m3" style={{marginTop: '20vh'}}>
                  <div>
                    <h3 className="white-text center" style={{fontWeight: 'light'}}>DASHBOARD</h3>
                  </div>
                  <div className="hide-on-small-only">
                    <span className="white-text">Welcome to JrDevs!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.displayDashboard()}
      </div>
		)
  }
}

export default Dashboard;
