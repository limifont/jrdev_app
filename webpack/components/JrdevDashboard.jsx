import React from 'react'
import Lessons from './Lessons'
import Badge from './Badge'

class JrdevDashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<h1>Jr Dev Dashboard</h1>
				<Lessons />
				<Badge />
			</div>
		)
	}
}

export default JrdevDashboard;