import React from 'react'
import { Link } from 'react-router'
import ClassroomGraph from './ClassroomGraph';
import JrdevPreview from './JrdevPreview'

class Classroom extends React.Component {
	constructor(props) {
		super(props)
		this.state = { classroom: null, jrdevs: [], addFail: false, height: window.innerHeight, width: window.innerWidth }
		this.failMessage = this.failMessage.bind(this)
		this.getInitialState = this.getInitialState.bind(this)
		this.handleResize = this.handleResize.bind(this)
	}

	componentWillMount() {
		$.ajax({
			url: `/api/classrooms/${this.props.params.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( classroom => {
			this.setState({ classroom })
		})
		$.ajax({
			url: `/api/classroom_jrdevs/${this.props.params.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( jrdevs => {
			this.setState({ jrdevs })
		}).fail( data => {
			console.log("failed to get jrdevs for classroom", data)
		})
	}

	addStudent(e) {
		e.preventDefault();
		let id = this.state.classroom.id
		let secret_phrase = this.refs.secretPhrase.value
		$.ajax({
			url: '/api/classroom_jrdevs',
			type: 'POST',
			dataType: 'JSON',
			data: { id, secret_phrase }
		}).done( jrdev => {
			this.setState({ jrdevs: [{...jrdev}, ...this.state.jrdevs], addFail: false})
		}).fail( data => {
			this.setState({ addFail: true })
		})
		this.refs.addStudent.reset();
	}

	deleteJrdev(id) {
		$.ajax({
			url: `/api/classroom_jrdevs/${this.state.classroom.id}/${id}`,
			type: 'DELETE',
			dataType: 'JSON'
		}).done( data => {
			let index = this.state.jrdevs.findIndex(j => j.id === id)
			let jrdevs = this.state.jrdevs
			this.setState({
				jrdevs: [
					...jrdevs.slice(0, index),
					...jrdevs.slice(index + 1, jrdevs.length)
				]
			})
		}).fail( data => {
			console.log(data)
		})
	}

	getInitialState() {
    return {width: window.innerWidth, height: window.innerHeight};
  }

  handleResize(e) {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }


	displayStudents() {
		return this.state.jrdevs.map( jrdev => {
			return(
				<div className="col s12">
					<div className="card orange lighten-2 white-text center" style={{overflow: 'scroll'}}>
						<JrdevPreview key={`classroomJrdevPreview-${jrdev.id}`} jrdev={jrdev} deleteJrdev={this.deleteJrdev.bind(this)}/>
					</div>
				</div>
			)
		})
	}

	failMessage() {
		if(this.state.addFail) {
			return (
				<div className="center" style={{backgroundColor: "rgba(255,0,0,0.2)", minHeight: "50px", borderRadius: "10px", padding: "5px", marginTop: "8px"}}>
					<p style={{color: "red", marginBottom: "2px 0 2px 0"}}>Failed to find Jr Dev</p>
				  <p style={{color: "red", marginTop: "0px"}}>Please confirm secret phrase</p>
				</div>
			)
		}
	}

	render() {
		if(this.state.classroom){
			return(
				<div className="container">
					<div className="row">
						<div className="col s12 center">
							<h2>{this.state.classroom.name}</h2>
						</div>
					</div>
					
					<div className="row">
						
						<div className="col s12 m8">
							<div className="row">
								<span className="col s12">
									STATS:
								</span>
								<div className="col s12">
									<div className="card">
										<div className="card-content hide-on-small-only">
											<ClassroomGraph classroom={this.state.classroom} height={this.state.height/2} width={this.state.width/2.5}/>
										</div>
										<div className="card-content hide-on-med-and-up">
											<ClassroomGraph classroom={this.state.classroom} height={this.state.height/2} width={this.state.width/1.5}/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col s12 m4">
							<div className="row">
							  <span className="col s12">
							    ADD JRDEV TO CLASSROOM:
							  </span>
					      <div className="col s12">
                  <div className="card" style={{maxHeight: '643px', overflow: "scroll"}}>
                  	<div className="card-content">
                  		<form ref="addStudent" onSubmit={this.addStudent.bind(this)}>
												<input ref="secretPhrase" type="text" placeholder="Student's Secret Pass Phrase" required={true} onClick={()=>{this.setState({ addFail: false })}} />
												<button type="submit" className="btn">Add</button>
											</form>
											{this.failMessage()}
                  	</div>
                  </div>
                </div>
						  </div>

						  <div className="row">
					  		<span className="col s12">
					  			JRDEVS:
					  		</span>
					  		<div>
							  	<div className="row">
							  		{this.displayStudents()}
							  	</div>
							  </div>
						  </div>
						</div>
					</div>
				</div>
			)
		} else {
			return(<h2>Loading...</h2>)
		}
	}
}

export default Classroom