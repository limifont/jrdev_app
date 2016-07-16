import React from 'react'
import { Link } from 'react-router'
import ClassroomGraph from './ClassroomGraph';
import JrdevPreview from './JrdevPreview'

class Classroom extends React.Component {
	constructor(props) {
		super(props)
		this.state = { classroom: null, jrdevs: [], addFail: false }
		this.failMessage = this.failMessage.bind(this)
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
			this.setState({ jrdevs: [{...jrdev}, ...this.state.jrdevs], addFail: false})
		}).fail( data => {
			this.setState({ addFail: true })
		})
		this.refs.addStudent.reset();
	}

	deleteJrdev(id) {
		$.ajax({
			url: `/api/classroom_jrdevs/${this.state.classroom.id}/${id}`,
			type: 'DELETE',
			dataType: 'JSON'
		}).done( data => {
			let index = this.state.jrdevs.findIndex(j => j.id === id)
			let jrdevs = this.state.jrdevs
			this.setState({
				jrdevs: [
					...jrdevs.slice(0, index),
					...jrdevs.slice(index + 1, jrdevs.length)
				]
			})
		}).fail( data => {
			console.log(data)
		})
	}


	displayStudents() {
		return this.state.jrdevs.map( jrdev => {
			return(
				<JrdevPreview key={`classroomJrdevPreview-${jrdev.id}`} jrdev={jrdev} deleteJrdev={this.deleteJrdev.bind(this)}/>
			)
		})
	}

	failMessage() {
		if(this.state.addFail) {
			return (
				<div className="center" style={{backgroundColor: "rgba(255,0,0,0.2)", minHeight: "50px", borderRadius: "10px"}}>
					<p style={{color: "red", marginBottom: "2px"}}>Failed to find Jr Dev</p>
				  <p style={{color: "red", marginTop: "0px"}}>Please confirm secret phrase</p>
				</div>	
			)
		}
	}

	render() {
		if(this.state.classroom){
			return(
				<div className="container">
					<div className="row">
						<h1>{this.state.classroom.name}</h1>
						<div className="col m9">
							<div className="card">
								<div className="card-content">
									<h3>Stats</h3>
									<ClassroomGraph classroom={this.state.classroom}/>
								</div>
							</div>
						</div>
						<div className="col m3">
							<div className="card">
								<div className="card-content">
									<h6>Add a student to this classroom</h6>
									<form ref="addStudent" onSubmit={this.addStudent.bind(this)}>
										<input ref="secretPhrase" type="text" placeholder="Student's Secret Pass Phrase" />
										<button type="submit" className="btn">Add</button>
									</form>
									{this.failMessage()}
									<div style={{marginTop: "20px"}}>
										<span className="card-title" >
											JrDevs:
										</span>
									</div>
									{this.displayStudents()}
								</div>
							</div>
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