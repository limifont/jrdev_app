import React from 'react'
import { Link } from 'react-router'
import Lessons from './Lessons'

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

	displayMentees() {
		return this.state.mentees.map( mentee => {
			return(<p><Link to={`/jrdev/${mentee.id}`}>{mentee.name}</Link></p>)
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
				<div className="row">
					<h1>Mentor Dashboard</h1>
					<div className="col m9">
						<Lessons lessons={this.state.lessons} links={true}/>
					</div>
					<div className="col m3">
						<h6>Add a Jr Dev to your mentorship</h6>
						<form ref="addMentee" onSubmit={this.addMentee.bind(this)}>
							<input ref="secret_phrase" type="text" placeholder="Jr Dev's Pass Phrase" />
						</form>
						{this.failMessage()}
						<div>
							<h6>Jr Devs You Mentor</h6>
							{this.displayMentees()}
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