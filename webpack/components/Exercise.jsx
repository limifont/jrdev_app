import React from 'react';

class Exercise extends React.Component {
  constructor(props) {
      super(props);
      this.state = { exercise: null }
  }
  
  componentWillMount() {
      $.ajax({
        url: `/api/exercises/${this.props.params.id}`,
        type: 'GET',
        dataType: 'JSON'
      }).done( exercise => {
        this.setState({ exercise })
      }).fail( data => {
        console.log(data)
      });     
    }

  render() {
      if(this.state.exercise) {
        return(
          <div className="container">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{this.state.exercise.lesson_id}</span>
                  <div>
                    <label>Instruction:</label>
                    <p>{this.state.exercise.instruction}</p>
                  </div>
                </div>
                <div className="card-action">
                </div>
              </div>
            </div>
          </div>
        )
      } else {
        return(
          <h3 className="center">Exercise not loaded</h3>
        )
      }
  }
}

export default Exercise;
