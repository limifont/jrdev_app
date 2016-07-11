import React from 'react'
import Lessons from './Lessons'
import Badge from './Badge'

class JrdevDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { secret_phrase: "", lessons: [] }
		this.displayPhrase = this.displayPhrase.bind(this);
	}

	componentWillMount() {
	  $.ajax({
	    url: `/api/jrdevs/${this.props.id}`,
	    type: 'GET',
	    dataType: 'JSON'
	  }).done( user => {
	    this.setState({ secret_phrase: user["secret_phrase"]})
	  }).fail( data => {
	    console.log('failure', data)
	  })
	  $.ajax({
			url: `/api/lessons_index/${this.props.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( lessons => {
			this.setState({ lessons })
		}).fail( data => {
			console.log("Failure to get all lessons for JrdevDashboard", data)
		})
	}

	displayPhrase() {
		return(
			<div>
				<i>{this.state.secret_phrase}</i>
			</div>
		)
	}

	render() {
		if(this.state.lessons.length > 0) {
			return(
				<div className="row">
					<h1>Jr Dev Dashboard</h1>
					{this.displayPhrase()}
					<div className="col m8">
						<Lessons lessons={this.state.lessons} links={true}/>
					</div >
					<Badge id={this.props.id} />
				</div>
			)
		} else {
			return(<h3>Loading...</h3>)
		}
	}
}

export default JrdevDashboard;