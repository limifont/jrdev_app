import React from 'react'
import { Link } from 'react-router'
import Lessons from './Lessons'
import Classroom from './Classroom'

class EducatorDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: null, classrooms: []}
		this.displayClassrooms = this.displayClassrooms.bind(this)
	}

	componentWillMount() {
		$.ajax({
			url: `/api/educators/${this.props.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( user => {
			this.setState({ user })
		}).fail( data => {
			console.log("failed to retrieve usere", data)
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
			console.log("Failed to create classroom", data)
		})
		this.refs.name.reset();
	}

	displayClassrooms() {
		return this.state.classrooms.map( classroom => {
			return (<p key={`classroom-${classroom.id}`}><Link to={`/classroom/${classroom.id}`}>{classroom.name}</Link></p>)
		})
	}

	render() {
		return(
			<div className="row">
				<h1>Educator Dashboard</h1>
				<div className="col m9">
					<Lessons />
				</div>
				<div className="col m3">
					<div>
						<h6>Create a Classroom</h6>
						<form ref="createClassroom" onSubmit={this.createClassroom.bind(this)}>
							<input ref="name" type="text" placeholder="Classroom Name" />
							<button type="submit" className="btn">Create</button>
						</form>
					</div>
					<div>
						<h6>Your Classrooms</h6>
						{this.displayClassrooms()}
					</div>
				</div>
			</div>
		)
	}
}

export default EducatorDashboard;