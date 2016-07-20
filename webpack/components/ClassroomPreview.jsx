import React from 'react';
import { Link } from 'react-router'


class ClassroomPreview extends React.Component {
	constructor(props) {
		super(props)
		this.state = { delete: false, edit: false }
		this.toggleDelete = this.toggleDelete.bind(this)
		this.toggleEdit = this.toggleEdit.bind(this)
	}

	toggleEdit(e) {
		e.preventDefault();
		this.setState({ edit: !this.state.edit })
	}

	handleEdit(e) {
		e.preventDefault();
		this.props.editClassroom(this.props.classroom.id, this.refs.name.value)
		this.setState({ edit: false })
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
					<div className="col s12">
	          <div className="card orange lighten-2 white-text">
	          	<div className="card-content white-text center" style={{padding: "0px"}}>
	              <span className="card-title" style={{fontSize: "14px"}}>{this.props.classroom.name}</span>
	              <p>Are you sure you want to delete this classroom?</p>
	              <a href='#' style={{color: "red", marginRight: "6px"}} onClick={this.handleDelete.bind(this)}>Yes</a>
	              <a href='#' onClick={this.toggleDelete}>Nope</a>
	            </div>
	          </div>  
	        </div>
        </div>
			)
		} else if(this.state.edit) {
			return(
				<div className='row'>
					<div className="col s12">
	          <div className="card orange lighten-2 white-text">
	          	<div className="card-content white-text center" style={{padding: "0px"}}>
	          		<div className="container">
		              <form ref="editForm" onSubmit={this.handleEdit.bind(this)} stlye={{margin: "0px 2px 0px 2px"}}>
		              	<input ref="name" type="text" defaultValue={this.props.classroom.name} required={true}/>
		              </form>
	              </div>
	            </div>
          	<a href='#' style={{margin: "0px 6px 0px 6px"}} onClick={this.handleEdit.bind(this)}>Update Name</a>
          	<span> | </span>
            <a href='#' onClick={this.toggleEdit}>Cancel</a>
	          </div>  
	        </div>
        </div>
			)
		} else {
			return(
				<div className='row'>
					<div className="col s12">
	          <div className="card orange lighten-2 white-text" style={{overflow: "scroll"}}>
	          	<Link to={`/classroom/${this.props.classroom.id}`}>
		          	<div className="card-content white-text center" style={{padding: "0px", display: "inline-block"}}>
		              <span className="card-title" style={{marginLeft: "8px", fontSize: "15px"}}>{this.props.classroom.name}</span>
		            </div>
	            </Link>
							<a href='#' onClick={this.toggleDelete} style={{color: "white"}}><i className="small material-icons" style={{float: "right", marginTop: "7px", cursor: "pointer"}}>delete_forever</i></a>
							<a href='#' onClick={this.toggleEdit} style={{color: "white"}}><i className="small material-icons" style={{float: "right", marginTop: "7px", cursor: "pointer"}}>mode_edit</i></a>
	          </div>  
	        </div>
        </div>
			)
		}
	}
}

export default ClassroomPreview;