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
				<div>
					<div id="lesson" style={{backgroundImage: 'url(http://res.cloudinary.com/di0vizmtw/image/upload/e_auto_contrast/v1469049398/Asset_1_as2yqd.png)', height: '45vh', marginBottom: '5vh'}}>
					  <div id="lesson-bckgnd" style={{width: '100%', height: '100%'}}>
					    <div className="container">
					      <div className="row">
					        <div className="col s12 m8" style={{marginTop: '20vh'}}>
					          <div className="hide-on-med-and-up">
					            <h3 className="white-text center" style={{fontWeight: 'light', fontSize: '1.9em'}}>{this.state.lesson.name}</h3>
					          </div>
					          <div className="hide-on-small-only">
					            <h3 className="white-text" style={{fontWeight: 'light'}}>{this.state.lesson.name}</h3>
					          </div>
					          <div className="hide-on-small-only">                                  
					            <span className="white-text">Learn the Ruby programming language with these exercises</span>
					          </div>
					        </div>
					      </div>
					    </div>
					  </div>
					</div>

					<div className="container">
						<div className="row">
							
							<div className="row">
								{this.displayExercises()}
							</div>
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