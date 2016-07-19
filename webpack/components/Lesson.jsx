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
			debugger
			this.setState({ lesson, exercises })
			console.log(exercises)
		})
	}


	displayExercises() {
		return this.state.exercises.map( e => {
			let icon = e.icon_url
			if(e.completed || e.next_up) {
				return(
					<Link to={`/lesson/${this.state.lesson.id}/exercise/${e.position}`}>
						<div className="col s12 m12" key={`e-${e.id}`}>
							<div className="card lesson-card">
								<div className="card-content">
									<div className="row valign-wrapper lesson-row">
										<div className="col s6 m9 l9">
											<h3 className="valign center lesson-title">{e.name}</h3>
										</div>
										<div className="valign col s6 m3 l3">
											<img src={icon} style={{maxWidth: '100%', maxHeight: '100%'}}/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Link>
				)
			} else {
				return(
					<div className="col s12 m12" key={`e-${e.id}`}>
						<div className="card lesson-card">
							<div className="card-content">
								<div className="row valign-wrapper lesson-row">
									<div className="col s6 m9 l9">
										<h3 className="valign center lesson-title">{e.name}</h3>
									</div>
									<div className="valign col s6 m3 l3">
										<img src={icon} style={{maxWidth: '100%', maxHeight: '100%'}}/>
									</div>
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