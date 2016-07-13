import React from 'react';

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
					<p><Link to={`/classroom/${classroom.id}`}>{classroom.name}</Link></p>
				</div>	
			)
		}
	}
}

export default ClassroomPreview;