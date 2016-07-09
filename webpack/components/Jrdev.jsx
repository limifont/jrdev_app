import React from 'react'
import ExercisesByMonthChart from './ExercisesByMonthChart'

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
			debugger
		})
	}

	render() {
			return(
				<div>
					<h2>Jrdev Name</h2>
					<ExercisesByMonthChart />
				</div>
			)
	}

}

export default Jrdev