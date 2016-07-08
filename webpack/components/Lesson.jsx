import React from 'react'

class Lesson extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		$.ajax({
			url: `/api/lessons/${this.props.params.lesson_id}`,
			type: 'GET',
			dataType: 'JSON'
		})     
	}

	render() {
		return(<h1>Lesson View</h1>)
	}
}

export default Lesson