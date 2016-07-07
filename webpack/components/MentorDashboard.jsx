import React from 'react'
import Lessons from './Lessons'

class MentorDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: null, mentees: []}
		this.displayMentees = this.displayMentees.bind(this)
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
	}

	addMentee(e) {
		e.preventDefault();
		$.ajax({
			url: 'api/mentors_jrdevs',
			type: 'POST',
			dataType: 'JSON',
			data: { secret_phrase: this.refs.secret_phrase.value }
		}).done( mentee => {
			this.setState({ mentees: [{ ...mentee }, ...this.state.mentees]})
		})
	}

	displayMentees() {
		return this.state.mentees.map( mentee => {
			return(<p>{mentee.name}</p>)
		}) 
	}

	render() {
		if(this.state.user){
			return(
				<div className="row">
					<h1>Mentor Dashboard</h1>
					<Lessons />
					<div className="col m3 offset-m9">e
						<h6>Add a Jr Dev to your mentorship</h6>
						<form ref="addMentee" onSubmit={this.addMentee.bind(this)}>
							<input ref="secret_phrase" type="text" placeholder="Jr Dev's Pass Phrase" />
						</form>
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