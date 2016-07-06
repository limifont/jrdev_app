import React from 'react'

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

	addMentee() {
		$.ajax({
			url: 'api/mentors_jrdevs',
			type: 'POST',
			dataType: 'JSON',
			data: { secret_phrase: this.refs.secret_phrase.value }
		}).done( mentee => {
			this.setState({ mentees: { ...mentee }, ...this.state.mentees})
		})
	}

	displayMentees() {
		return this.state.mentees.map( mentee => {
			return(<p>{mentee.name}</p>)
		}) 
	}

	render() {
		return(
			<div className="row">
				<h1>Mentor Dashboard</h1>
				<div className="col m3 offset-m9">
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
	}
}

export default MentorDashboard;