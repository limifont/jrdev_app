import React from 'react';

class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { badges: [] }
  }

  componentWillMount() {
    $.ajax({
      url: `/api/completed_exercises`,
      type: 'GET',
      dataType: 'JSON'
    }).done( badges => {
      this.setState({ badges });
      console.log(badges);
    }).fail( data => {
      console.log('failure', data)
    })
  }


  displayBadges() {
    return (this.state.badges.map( badge => {
      return (
        <div>
          {badge.name}
        </div>
      )
    }))
  }

  render() {
    return(
      <div className="row">
        <i>These exercises have been completed:</i>
        {this.displayBadges.bind(this)()}
      </div>
    )
  }
}

export default Badge;

