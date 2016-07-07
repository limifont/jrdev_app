import React from 'react'

class Lessons extends React.Component {
	constructor(props) {
		super(props)
		this.state = { allLessons: [] }
		this.displayLessons = this.displayLessons.bind(this)
	}

	componentWillMount() {
		$.ajax({
			url: 'api/lessons',
			type: 'GET',
			dataType: 'JSON'
		}).done( allLessons => {
			this.setState({ allLessons })
		}).fail( data => {
			console.log("Failure to get all lessons", data)
		})
	}

	displayLessons() {
		return this.state.allLessons.map( lesson => {
			return(
				<div>
					<h4>{lesson.name}</h4>
					<p>Completed: {lesson.completed.toString()}</p>
					<p>You have completed {lesson.exercises_completed_count} of {lesson.exercises_count} exercises</p>
				</div>
			)
		})
	}

	render() {
		return (
			<div>
				{this.displayLessons()}
			</div>
		)
	}
}

export default Lessons