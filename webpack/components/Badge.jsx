import React from 'react';

class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exercises: [], marathon: false }
    this.marathonBadge = this.marathonBadge.bind(this);
    this.displayBadges = this.displayBadges.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: `/api/completed_exercises`,
      type: 'GET',
      dataType: 'JSON'
    }).done( exercises => {
      this.setState({ exercises });
      this.displayBadges();
      console.log(exercises);
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


  displayBadges() {
    //marathon badge
    let byDay = {}
    this.state.exercises.map( exercise => {
      let date = new Date(exercise.created_at).toLocaleDateString()
      if (date in byDay) {
        byDay[date] += 1;
      } else {
        byDay[date] = 1;
      }
    })

    let marathon = false;
    for (let key in byDay ) {
      if (byDay[key] >= 3) {
        marathon = true;
        break;
      }
    }
    this.setState({ marathon })
  }

  render() {
    
    return(
      <div className="row">
        <i>These exercises have been completed:</i>
        {this.marathonBadge()}
      </div>
    )
  }
}

export default Badge;

