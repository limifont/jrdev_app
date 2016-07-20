import React from 'react';
import { Link } from 'react-router';
import Lessons from './Lessons';
import Classroom from './Classroom';
import ClassesStats from './ClassesStats';
import RaisedButton from 'material-ui/RaisedButton';
import ClassroomPreview from './ClassroomPreview';
import ClassesAverages from './ClassesAverages';


class EducatorDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { user: null, classrooms: [], lessons: [], addFail: false }
		this.displayClassrooms = this.displayClassrooms.bind(this)
		this.failMessage = this.failMessage.bind(this)
		this.deleteClassroom = this.deleteClassroom.bind(this)
		this.editClassroom = this.editClassroom.bind(this)
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
		this.refs.createClassroom.reset();
	}

	editClassroom(id, name) {
		$.ajax({
			url: `/api/classrooms/${id}`,
			type: 'PUT',
			dataType: 'JSON',
			data: { classroom: { name } }
		}).done( classroom => {
			let index = this.state.classrooms.findIndex(c => c.id === id)
			let classrooms = this.state.classrooms
			this.setState({
				classrooms: [
					...classrooms.slice(0, index),
					classroom,
					...classrooms.slice(index + 1, classrooms.length)
				]
			})
		}).fail( data => {
			console.log(data);
		})
	}

	deleteClassroom(id) {
		$.ajax({
			url: `/api/classrooms/${id}`,
			type: 'DELETE',
			dataType: 'JSON'
		}).done( data => {
			let index = this.state.classrooms.findIndex(c => c.id === id)
			let classrooms = this.state.classrooms
			this.setState({
				classrooms: [
					...classrooms.slice(0, index),
					...classrooms.slice(index + 1, classrooms.length)
				]
			})
		}).fail( data => {
			console.log(data)
		})
	}

	displayClassrooms() {
		return this.state.classrooms.map( classroom => {
			return (
				<ClassroomPreview key={`classroomPreview-${classroom.id}`} classroom={classroom} editClassroom={this.editClassroom} deleteClassroom={this.deleteClassroom}/>
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
					<span className="col s12">
						STATS:
					</span>

					<div>
						<div className="row">
							<div className="col m12">
								<div className="card" style={{marginTop: "10px", paddingTop: "10px"}}>
									<div className="card-content center">
										<ClassesAverages id={this.props.id} />
										<ClassesStats classes={this.state.classrooms} idName={this.props.id} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col s12 m8" style={{height: '100%'}}>
						<div className="row">
							<span className="col s12">
							  LESSONS:
							</span>
							<div>
								<div className="row">
									<Lessons lessons={this.state.lessons} links={true}/>
								</div>
							</div>
						</div>
					</div >
					
					<div className="col s12 m4">
						<div className="row">
						  <span className="col s12">
						    CREATE A CLASSROOM:
						  </span>
				      <div className="col s12">
                <div className="card" style={{maxHeight: '643px', overflow: "scroll"}}>
                	<div className="card-content">
                		<form ref="createClassroom" onSubmit={this.createClassroom.bind(this)}>
                			<input ref="name" type="text" placeholder="Classroom Name" required={true}/>
                			<button type="submit" className="btn">Create</button>
                		</form>
                		{ this.failMessage() }
                	</div>
                </div>
              </div>
					  </div>
					  
					  <div className="row">
				  		<span className="col s12">
				  			CLASSROOMS:
				  		</span>
				  		<div>
						  	<div className="row">
									{this.displayClassrooms()}
						  	</div>
						  </div>
					  </div>
					</div>
				</div>
			</div>

		)
	}
}

export default EducatorDashboard;