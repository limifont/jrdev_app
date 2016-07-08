import React from 'react'
import Lessons from './Lessons'
import Badge from './Badge'

class JrdevDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { secret_phrase: "" }
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
	}

	displayPhrase() {
		return(
			<div>
				<i>{this.state.secret_phrase}</i>
			</div>
		)
	}

	render() {
		return(
			<div>
				<h1>Jr Dev Dashboard</h1>
				{this.displayPhrase()}
				<Lessons />
				<Badge id={this.props.id} />
			</div>
		)
	}
}

export default JrdevDashboard;