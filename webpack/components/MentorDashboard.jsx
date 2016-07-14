import React from 'react'
import { Link } from 'react-router'
import Lessons from './Lessons'
import JrdevPreview from './JrdevPreview'

class MentorDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { user: null, mentees: [], lessons: [], addFail: false }
		this.displayMentees = this.displayMentees.bind(this)
		this.failMessage = this.failMessage.bind(this)
	}

	componentWillMount() {
		$.ajax({
			url: `/api/mentors/${this.props.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( user => {
			this.setState({ user })
		}).fail( data => {
			console.log(data)
		})
		$.ajax({
			url: 'api/mentors_jrdevs',
			type: 'GET',
			dataType: 'JSON'
		}).done( mentees => {
			this.setState({ mentees: [
				...mentees,
				...this.state.mentees
			]})
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

	addMentee(e) {
		e.preventDefault();
		$.ajax({
			url: 'api/mentors_jrdevs',
			type: 'POST',
			dataType: 'JSON',
			data: { secret_phrase: this.refs.secret_phrase.value }
		}).done( mentee => {
			this.setState({ mentees: [{ ...mentee }, ...this.state.mentees], addFail: false})
		}).fail( data => {
			this.setState({ addFail: true })
		})
		this.refs.secret_phrase.value = '';
	}

	deleteMentee(id) {
		$.ajax({
			url: `/api/mentors_jrdevs/${this.state.user.id}/${id}`,
			type: 'DELETE',
			dataType: 'JSON'
		}).done( data => {
			let index = this.state.mentees.findIndex(c => c.id === id)
			let mentees = this.state.mentees
			this.setState({
				mentees: [
					...mentees.slice(0, index),
					...mentees.slice(index + 1, mentees.length)
				]
			})
		}).fail( data => {
			console.log(data)
		})
	}

	displayMentees() {
		return this.state.mentees.map( mentee => {
			return(
				<JrdevPreview key={`jrdevPreview-${mentee.id}`} jrdev={mentee} deleteJrdev={this.deleteMentee.bind(this)}/>
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
		if(this.state.user){
			return(
				<div>
					<div className="row" style={{overflow: 'hidden'}}>
						<div className="col m4 s12" style={{height: '100%'}}>
							<div className="card">
								<div className="card-content">
									<span class="card-title">Add a JrDev</span>
									<form ref="addMentee" onSubmit={this.addMentee.bind(this)}>
										<input ref="secret_phrase" type="text" placeholder="Jr Dev's Pass Phrase" />
									</form>
									{this.failMessage()}
								</div>
							</div>

							<div style={{height: '100%'}}>
								<div className="card">
									<div className="card-content"> 
										<span className="card-title">
											JrDevs:
										</span>
										{this.displayMentees()}
									</div>
								</div>
							</div>
						</div>

						<div className="col m8 s12" style={{height: '100%'}}>
							<div className="card" style={{height: '100%'}}>
								<Lessons lessons={this.state.lessons} links={true}/>
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

export default MentorDashboard;