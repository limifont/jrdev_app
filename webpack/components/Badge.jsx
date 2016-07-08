import React from 'react';

class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exercises: [], marathon: false, speedDemon: false }
    this.displayBadges = this.displayBadges.bind(this);
    this.speedDemonBadge = this.speedDemonBadge.bind(this);
    this.marathonBadge = this.marathonBadge.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: `/api/completed_exercises`,
      type: 'GET',
      dataType: 'JSON'
    }).done( exercises => {
      this.setState({ exercises });
      // console.log(exercises)
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
    }).fail( data => {
      console.log('failure', data)
    })
  }

  marathonBadge() {
    if (this.state.marathon) {
      return (
        <div>
          You got the marathon badge!!
        </div>
      )
    }
  }

  speedDemonBadge() {
    if (this.state.speedDemon) {
      return (
        <div>
          You got the Speed Demon Badge!!
        </div>
      )
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
        <i>These exercises have been completed:</i>
        {this.marathonBadge()}
        {this.speedDemonBadge()}
      </div>
    )
  }
}

export default Badge;

