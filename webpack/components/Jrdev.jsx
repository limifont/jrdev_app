import React from 'react'
import ExercisesByDayChart from './ExercisesByDayChart'

class Jrdev extends React.Component {
	constructor(props) {
		super(props)
		this.state = { jrdev: null }
	}

	componentWillMount() {
		$.ajax({
			url: `/api/jrdevs/${this.props.params.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( jrdev => {
			this.setState({ jrdev })
		}).fail( data => {
			console.log("failed to get jrdev", data)
		})
	}

	render() {
		if(this.state.jrdev) {
			return(
				<div>
					<h2>{this.state.jrdev.name}</h2>
					<p>Member since: {this.state.jrdev.created_at}</p>
					<ExercisesByDayChart jrdev={this.state.jrdev}/>
				</div>
			)
		} else {
			return(<h3>Loading...</h3>)
		}
	}

}

export default Jrdev