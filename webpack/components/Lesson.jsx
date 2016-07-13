import React from 'react'
import { Link } from 'react-router'

class Lesson extends React.Component {
	constructor(props) {
		super(props)
		this.state = { lesson: null, exercises: [] }
		this.displayExercises = this.displayExercises.bind(this)
	}

	componentWillMount() {
		$.ajax({
			url: `/api/lessons/${this.props.params.lesson_id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( data => {
			let lesson = data.lesson
			let exercises = data.exercises
			this.setState({ lesson, exercises })
		})
	}

	displayExercises() {
		return this.state.exercises.map( e => {
			if(e.id == 1 || e.completed || e.next_up) {
				return(
					<div className="center">
						<h5><Link to={`/lesson/${this.state.lesson.id}/exercise/${e.position}`}>{e.name}</Link></h5>
					</div>
				)
			} else {
				return(
					<div className="center">
						<h5>{e.name}</h5>
					</div>
				)	
			}
		})
	}

	render() {
		if(this.state.lesson){
			return(
				<div className="container">
					<div className="row">
						<h5 className="center">Lesson #{this.state.lesson.position}</h5>
						<h2 className="center">{this.state.lesson.name}</h2>
						{this.displayExercises()}
					</div>
				</div>
			)
		} else {
			return(<h3>Loading...</h3>)
		}
	}
}

export default Lesson