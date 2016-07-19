import React from 'react';

class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exercises: [], marathon: false, speedDemon: false, newbie: "" }
    this.displayBadges = this.displayBadges.bind(this);
    this.speedDemonBadge = this.speedDemonBadge.bind(this);
    this.marathonBadge = this.marathonBadge.bind(this);
    this.newbieBadge = this.newbieBadge.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: `/api/completed_exercises`,
      type: 'GET',
      dataType: 'JSON'
    }).done( exercises => {
      this.setState({ exercises });
      this.displayBadges();
    }).fail( data => {
      console.log('failure', data)
    })

    $.ajax({
      url: `/api/jrdevs/${this.props.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( user => {
      console.log(user)
      this.setState({ newbie: user["created_at"]})
    }).fail( data => {
      console.log('failure', data)
    })
  }

  marathonBadge() {
    if (this.state.marathon) {
      return (
        <div className="col s12 m12">
          <div className="card blue lighten-2 white-text center">
            <br />
              <div>
                <p>MARATHON</p>
                <p>
                  <i className="material-icons">assignment_turned_in</i>
                  <i className="material-icons">assignment_turned_in</i>
                  <i className="material-icons">assignment_turned_in</i>
                </p>
              </div>
            <br />
          </div>  
        </div>
      )
    }
  }

  speedDemonBadge() {
    if (this.state.speedDemon) {
      return (
        <div className="col s12 m12">
          <div className="card deep-orange lighten-1 white-text center">
            <br />
              <div>
                <p>SPEEDY</p>
                <p>
                  <i className="material-icons">done_all</i>
                </p>
              </div>
            <br />
          </div>
        </div>
      )
    }
  } 

  


  newbieBadge() {
    // days, hours, minutes, seconds, miliseconds
    let days = (2 * 24 * 60 * 60 * 1000)

    let currentTime = new Date().getTime();

    let signupDate = new Date(this.state.newbie).getTime();
    
    let newbieTime = signupDate + days

    if (this.state.newbie != null) {
      if (newbieTime >= currentTime) { 
        return (
          <div className="col s12 m12">
            <div className="card amber white-text center">
              <br />
                <div>
                  <p>NEWBIE</p>
                  <p><i className="material-icons md-48">fiber_new</i></p>
                </div>
              <br />
            </div>
          </div>
        )
      }
    }
  }

 

  displayBadges() {
    //marathon badge
    let byDay = {}
    this.state.exercises.map( exercise => {
      let date = new Date(exercise.created_at).toLocaleDateString()
      let time = new Date(exercise.created_at).getHours()
      if (date in byDay) {
        byDay[date]["count"] += 1;
        if (time in byDay[date]) {
          byDay[date][time] += 1;
        } else {
          byDay[date][time] += 1;
        }
      } else {
        byDay[date] = {count: 1}
        if (time in byDay[date]) {
          console.log('Nope!')
        } else {
          byDay[date][time] = 1;
        }

      }
    })

    let marathon = false;
    for (let key in byDay ) {
      if (byDay[key]["count"] >= 3) {
        marathon = true;
        break;
      }
    }
    this.setState({ marathon })

    let speedDemon = false;
    for (let key in byDay) {
      for (let hour in byDay[key]) {
        if (byDay[key][hour] >= 5) {
          speedDemon = true;
          break;
        }
      }
    }
    this.setState({ speedDemon })
  }

  render() {
    
    return(
      <div className="row">
        <span className="col s12 m12 l12">
          BADGES:
        </span>
        <div>  
          <div className="row">
            {this.newbieBadge()}
            {this.marathonBadge()}
            {this.speedDemonBadge()}
          </div>
        </div>
      </div>
    )
  }
}

export default Badge;

