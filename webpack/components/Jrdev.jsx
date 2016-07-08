import React from 'react'

class Jrdev extends React.Component {
	constructor(props) {
		super(props)
		this.state = { jrdev: null }
	}

	componentWillMount() {
		$.ajax({
			url: `/api/jrdevs/${this.props.params.id}`,
			type: 'GET',
			dataType: 'JSON'
		})     
	}

	render() {
		if(this.state.jrdev){
			return(
				<h2>{this.state.jrdev.name}</h2>
			)
		} else {
			return(<h3>Loading...</h3>)
		}
	}

}