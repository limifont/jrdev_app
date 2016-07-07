import React from 'react'

class Classroom extends React.Component {
	constructor(props) {
		super(props)
		this.state = { classroom: null }
	}

	componentWillMount() {
		$.ajax({
			url: `/api/classrooms/${this.props.params.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( classroom => {
			this.setState({ classroom })
		})
	}

	render() {
		if(this.state.classroom){
			return(
				<h1>{this.state.classroom.name}</h1>
			)	
		} else {
			return(<h2>Loading...</h2>)
		}
	}
}

export default Classroom