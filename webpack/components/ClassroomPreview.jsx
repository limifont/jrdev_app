import React from 'react';
import { Link } from 'react-router'

class ClassroomPreview extends React.Component {
	constructor(props) {
		super(props)
		this.state = { delete: false }
	}

	render () {
		if(this.state.delete) {

		} else {
			return(
				<div >
					<p><Link to={`/classroom/${this.props.classroom.id}`}>{this.props.classroom.name}</Link></p>
					<a>Delete</a>
				</div>	
			)
		}
	}
}

export default ClassroomPreview;