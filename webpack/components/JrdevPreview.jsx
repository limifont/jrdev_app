import React from 'react';
import { Link } from 'react-router'

class JrdevPreview extends React.Component {
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
		this.props.deleteJrdev(this.props.jrdev.id)
	}

	render () {
		if(this.state.delete) {
			return(
				<div className='row'>
					<div className="col m12">
	          <div className="card orange lighten-2 white-text">
	          	<div className="card-content white-text center" style={{padding: "0px"}}>
	              <span className="card-title">{this.props.jrdev.name}</span>
	              <p>Are you sure you want to delete this JrDev?</p>
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
	          	<Link to={`/jrdev/${this.props.jrdev.id}`}>
		          	<div className="card-content white-text center" style={{padding: "0px"}}>
		              <span className="card-title">{this.props.jrdev.name}</span>
	              <a herf='#' onClick={this.toggleDelete} style={{color: "white"}}><i className="small material-icons" style={{float: "right", marginTop: "7px", cursor: "pointer"}}>delete_forever</i></a>
		            </div>
	            </Link>
	          </div>  
	        </div>
        </div>
			)
		}
	}
}

export default JrdevPreview;