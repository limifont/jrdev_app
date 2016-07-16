import React from 'react'
import ExercisesByDayChart from './ExercisesByDayChart'
import Lessons from './Lessons'

class Jrdev extends React.Component {
	constructor(props) {
		super(props)
		this.state = { jrdev: null, completed_by_day: [], mentors: [], classrooms: [], lessons: [] }
		this.displayClassrooms = this.displayClassrooms.bind(this)
		this.displayMentors = this.displayMentors.bind(this)
	}

	componentWillMount() {
		$.ajax({
			url: `/api/show_stats/${this.props.params.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( data => {
			console.log(data)
			this.setState({ 
				jrdev: data.jrdev,
				completed_by_day: data.exercises_by_day,
				classrooms: data.classrooms,
				mentors: data.mentors
			})
		}).fail( data => {
			console.log("Failed to get completions by day", data)
		})
		$.ajax({
			url: `/api/lessons_index/${this.props.params.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( lessons => {
			this.setState({ lessons })
		}).fail( data => {
			console.log("Failure to get all lessons", data)
		})
	}

	displayClassrooms() {
		if(this.state.classrooms.length > 0) {
			return this.state.classrooms.map( c => {
				return(
					<div className="row">
						<div className="col s12 m12">
							<div className="card">
								<div className="card-content">	
									<h5>{c.classroom.name}</h5>
									<p>Instructor: {c.educator.name}</p>
								</div>
							</div>
						</div>
					</div>
				)
			})
		} else {
			return(<p>{this.state.jrdev.name} does not belong to any classrooms</p>)
		}
	}
	
	displayMentors() {
		console.log(this.state.mentors);
		if(this.state.mentors.length > 0) {
			return this.state.mentors.map( m => {
				return(
					<div className="row">
						<div className="col s12 m12">
							<div className="card">
								<div className="card-content">
									<h5>{m.name}</h5>
									<p>{m.email}</p>
								</div>
							</div>
						</div>
					</div>
				)
			})
		} else {
			return(
				<div className="row">
					<div className="col s12 m12">
						<div className="card">
							<div className="card-content">
								<h5>{this.state.jrdev.name} does not have any mentors</h5>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}

	render() {
		if(this.state.jrdev) {
			let jrdev = this.state.jrdev
			return(
				<div className="container">
					<div className="row">
						<div className="col s12 m12 center">
							<h2>{this.state.jrdev.name}</h2>
							<p>Username: {this.state.jrdev.username}</p>
						</div>
					</div>
					
					<div className="row">
						<div className="col s12 m12">
							<ExercisesByDayChart data={this.state.completed_by_day}/>
						</div>
					</div>

					<div className="row">
						<div className="col s12 m6">
							<div className="card">
								<div className="card-content">
									<h4>Classrooms</h4>
									{this.displayClassrooms()}
								</div>
							</div>
						</div>

						<div className="col s12 m6">
							<div className="card">
								<div className="card-content">
									<h4>Mentors</h4>
									{this.displayMentors()}
								</div>
							</div>
						</div>

					</div>
					
					<div className="row">
						<div className="col s12 m12">
							<div className="card">	
								<div className="card-content">
									<h4>{`${jrdev.name}'s Lesson Progress`}</h4>
									<Lessons lessons={this.state.lessons} links={false} />
								</div>
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

export default Jrdev