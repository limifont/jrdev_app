import React from 'react'

class MentorDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: null, mentees: []}
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

	}

	render() {
		return(
			<div className="row">
				<h1>Mentor Dashboard</h1>
				<div className="col m3 offset-m9">
					<h6>Add a Jr Dev to your mentorship</h6>
					<form ref="addMentee" onSubmit={this.addMentee.bind(this)}>
						<input type="text" placeholder="Jr Dev's Pass Phrase" />
					</form>
				</div>
			</div>
		)
	}
}

export default MentorDashboard;