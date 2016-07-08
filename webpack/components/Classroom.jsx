import React from 'react'
import ClassroomGraph from './ClassroomGraph';

class Classroom extends React.Component {
	constructor(props) {
		super(props)
		this.state = { classroom: null, jrdevs: [] }
	}

	componentWillMount() {
		$.ajax({
			url: `/api/classrooms/${this.props.params.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( classroom => {
			this.setState({ classroom })
		})
		$.ajax({
			url: `/api/classroom_jrdevs/${this.props.params.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( jrdevs => {
			this.setState({ jrdevs })
		}).fail( data => {
			console.log("failed to get jrdevs for classroom", data)
		})
	}

	addStudent(e) {
		e.preventDefault();
		let id = this.state.classroom.id
		let secret_phrase = this.refs.secretPhrase.value
		$.ajax({
			url: '/api/classroom_jrdevs',
			type: 'POST',
			dataType: 'JSON',
			data: { id, secret_phrase }
		}).done( jrdev => {
			this.setState({ jrdevs: [{...jrdev}, ...this.state.jrdevs]})
		}).fail( data => {
			console.log("Failed to add student", data.errors)
		})
	}


	displayStudents() {
		return this.state.jrdevs.map( jrdev => {
			return(<p>{jrdev.name}</p>);
		})
	}

	render() {
		if(this.state.classroom){
			return(
				<div className="row">
					<h1>{this.state.classroom.name}</h1>
					<div className="col m9">
						<h3>Stats</h3>
						<ClassroomGraph />
					</div>
					<div className="col m3">
						<div>
							<h6>Add a student to this classroom</h6>
							<form ref="addStudent" onSubmit={this.addStudent.bind(this)}>
								<input ref="secretPhrase" type="text" placeholder="Student's Secret Pass Phrase" />
								<button type="submit" className="btn">Add</button>
							</form>
						</div>
						<div>
							<h6>Students</h6>
							{this.displayStudents()}
						</div>
					</div>
				</div>
			)
		} else {
			return(<h2>Loading...</h2>)
		}
	}
}

export default Classroom