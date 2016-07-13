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
			if(e.completed || e.next_up) {
				return(
					<div className="col s12 m12">
						<div className="card">
							<div className="card-content">
								<h5 className="center"><Link to={`/lesson/${this.state.lesson.id}/exercise/${e.position}`}>{e.name}</Link></h5>
							</div>
						</div>
					</div>
				)
			} else {
				return(
					<div className="col s12 m12">
						<div className="card">
							<div className="card-content">
								<div className="center">
									<h5>{e.name}</h5>
								</div>
							</div>
						</div>
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
						<h2 className="center">{this.state.lesson.name}</h2>
						<div className="row">
							{this.displayExercises()}
						</div>
					</div>
				</div>
			)
		} else {
			return(<h3>Loading...</h3>)
		}
	}
}

export default Lesson