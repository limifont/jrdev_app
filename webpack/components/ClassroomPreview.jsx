import React from 'react';
import { Link } from 'react-router'

class ClassroomPreview extends React.Component {
	constructor(props) {
		super(props)
		this.state = { delete: false }
		this.toggleDelete = this.toggleDelete.bind(this)
	}

	toggleDelete(e) {
		e.preventDefault();
		this.setState({ delete: !this.state.delete })
	}

	handleDelete(e) {
		e.preventDefault();
		this.props.deleteClassroom(this.props.classroom.id)
	}

	render () {
		if(this.state.delete) {
			return(
				<div className='row'>
					<div className="col m12">
	          <div className="card orange lighten-2 white-text">
	          	<div className="card-content white-text center" style={{padding: "0px"}}>
	              <span className="card-title">{this.props.classroom.name}</span>
	              <p>Are you sure you want to delete this classroom?</p>
	              <a href='#' style={{color: "red", marginRight: "6px"}} onClick={this.handleDelete.bind(this)}>Yes</a>
	              <a href='#' onClick={this.toggleDelete}>Nope</a>
	            </div>
	          </div>  
	        </div>
        </div>
			)
		} else {
			return(
				<div className='row'>
					<div className="col m12">
	          <div className="card orange lighten-2 white-text">
	          	<Link to={`/classroom/${this.props.classroom.id}`}>
		          	<div className="card-content white-text center" style={{padding: "0px"}}>
		              <span className="card-title">{this.props.classroom.name}</span>
		            </div>
	            </Link>
	            <div className="card-action white-text" style={{padding: "2px"}}>
								<a herf='#' onClick={this.toggleDelete}>Delete</a>
	            </div>
	          </div>  
	        </div>
        </div>
			)
		}
	}
}

export default ClassroomPreview;