import React from 'react'

class Lessons extends React.Component {
	constructor(props) {
		super(props)
		this.state = { allLessons: [], completedLessons: [] }
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
		$.ajax({
			url: 'api/completed_lessons',
			type: 'GET',
			dataType: 'JSON'
		}).done( data => {
			
		})
	}

	render() {
		return (
			<h1>Lessons</h1>
		)
	}
}

export default Lessons