import React from 'react'
import Lessons from './Lessons'

class JrdevDashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<h1>Jr Dev Dashboard</h1>
				<Lessons />
			</div>
		)
	}
}

export default JrdevDashboard;