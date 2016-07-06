import React from 'react';

class Badge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { achievements: [] }
  }

  componentWillMount() {
    $.ajax({
      url: `/api/completed_exercises`,
      type: 'GET',
      dataType: 'JSON'
    }).done( result => {
      console.log(result)
    }).fail( data => {
      console.log('failure', data)
    })
  }

  render() {
    return (
      <div>Badge</div>
    )
  }
}

export default Badge;

