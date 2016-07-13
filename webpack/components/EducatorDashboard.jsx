import React from 'react'
import { Link } from 'react-router'
import Lessons from './Lessons'
import Classroom from './Classroom'
import ClassesStats from './ClassesStats';

class EducatorDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { user: null, classrooms: [], lessons: [], addFail: false }
		this.displayClassrooms = this.displayClassrooms.bind(this)
		this.failMessage = this.failMessage.bind(this)
	}

	componentWillMount() {
		$.ajax({
			url: `/api/educators/${this.props.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( user => {
			this.setState({ user })
		}).fail( data => {
			console.log("failed to retrieve user", data)
		})
		$.ajax({
			url: 'api/classrooms',
			type: 'GET',
			dataType: 'JSON'
		}).done( classrooms => {
			this.setState({ classrooms })
		}).fail( data => {
			console.log("Failed to retrieve classrooms", data)
		})
		$.ajax({
			url: `/api/lessons_index/${this.props.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( lessons => {
			this.setState({ lessons })
		}).fail( data => {
			console.log("Failure to get all lessons for JrdevDashboard", data)
		})
	}

	createClassroom(e) {
		e.preventDefault();
		name = this.refs.name.value
		$.ajax({
			url: '/api/classrooms',
			type: 'POST',
			data: { classroom: { name }}
		}).done( classroom => {
			this.setState({ classrooms: [{...classroom}, ...this.state.classrooms]})
		}).fail( data => {
			this.setState({ addFail: true })
		})
		this.refs.name.reset();
	}

	displayClassrooms() {
		return this.state.classrooms.map( classroom => {
			return (
				<p key={`classroom-${classroom.id}`}>
					<Link to={`/classroom/${classroom.id}`}>{classroom.name}</Link>
				</p>
			)
		})
	}

	failMessage() {
		if(this.state.addFail) {
			return (
				<div className="center" style={{backgroundColor: "rgba(255,0,0,0.2)", minHeight: "50px", borderRadius: "10px"}}>
					<p style={{color: "red", marginBottom: "2px"}}>Failed to create classroom</p>
				</div>	
			)
		}
	}

	render() {
		return(
			<div>
				<div className="row">
					<div className="col m12 s12">
						<div className="card">
							<div className="card-content center">
								<ClassesStats classes={this.state.classrooms} idName={this.props.id} />
							</div>
						</div>
					</div>
				</div>
				
				<div className="row">
					<div className="col m4 s12">
						<div className="card">
							<div className="card-content">
								<span class="card-title">Create a Classroom</span>
								<form ref="createClassroom" onSubmit={this.createClassroom.bind(this)}>
									<input ref="name" type="text" placeholder="Classroom Name" />
									<button type="submit" className="btn">Create</button>
								</form>
								{ this.failMessage() }
							</div>
							
						</div>

						<div>
							<div className="card">
								<div className="card-content"> 
									<span className="card-title">
										Classrooms:
									</span>
									{this.displayClassrooms()}
								</div>
							</div>
						</div>
					</div>

					<div className="col m8 s12">
						<div className="card">
							<Lessons lessons={this.state.lessons} links={true}/>
						</div>
					</div>

				</div>
			</div>
		)
	}
}

export default EducatorDashboard;