import React from 'react'
import ExercisesByDayChart from './ExercisesByDayChart'
import Lessons from './Lessons'

class Jrdev extends React.Component {
	constructor(props) {
		super(props)
		this.state = { jrdev: null, completed_by_day: [], mentors: [], classrooms: [], lessons: [], height: window.innerHeight, width: window.innerWidth }
		this.displayClassrooms = this.displayClassrooms.bind(this)
		this.displayMentors = this.displayMentors.bind(this)
		this.getInitialState = this.getInitialState.bind(this)
		this.handleResize = this.handleResize.bind(this)
	}

	componentWillMount() {
		$.ajax({
			url: `/api/show_stats/${this.props.params.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( data => {
			console.log(data)
			this.setState({ 
				jrdev: data.jrdev,
				completed_by_day: data.exercises_by_day,
				classrooms: data.classrooms,
				mentors: data.mentors
			})
		}).fail( data => {
			console.log("Failed to get completions by day", data)
		})
		$.ajax({
			url: `/api/lessons_index/${this.props.params.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( lessons => {
			this.setState({ lessons })
		}).fail( data => {
			console.log("Failure to get all lessons", data)
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


	displayClassrooms() {
		if(this.state.classrooms.length > 0) {
			return this.state.classrooms.map( c => {
				return(
					<div className="col s12">
						<div className="card">
							<div className="card-content">	
								<span className="card-title">{c.classroom.name}</span>
								<p>Instructor: {c.educator.name}</p>
							</div>
						</div>
					</div>
				)
			})
		} else {
			return(
				<div className="col s12">
					<div className="card">
						<div className="card-content">	
							<p>{this.state.jrdev.name} does not belong to any classrooms</p>
						</div>
					</div>
				</div>
			)
		}
	}
	
	displayMentors() {
		console.log(this.state.mentors);
		if(this.state.mentors.length > 0) {
			return this.state.mentors.map( m => {
				return(
					<div className="col s12">
						<div className="card">
							<div className="card-content">	
								<span className="card-title">{m.name}</span>
								<p>Instructor: {m.email}</p>
							</div>
						</div>
					</div>
				)
			})
		} else {
			return(
				<div className="col s12">
					<div className="card">
						<div className="card-content">	
							<p>{this.state.jrdev.name} does not have any mentors</p>
						</div>
					</div>
				</div>
			)
		}
	}

	render() {
		if(this.state.jrdev) {
			let jrdev = this.state.jrdev
			return(
				<div>
					<div style={{backgroundImage: 'url(http://res.cloudinary.com/di0vizmtw/image/upload/v1468821593/splashpic2_copy_ber9cl.jpg)', height: '45vh', marginBottom: '5vh'}}>
					  <div style={{width: '100%', height: '100%', background: 'rgba(0,0,0,.3)'}}>
					    <div className="container">
					      <div className="row">
					        <div className="col s12 m3" style={{marginTop: '20vh'}}>
					          <div className="hide-on-med-and-up">
					            <h3 className="white-text center" style={{fontWeight: 'light'}}>{this.state.jrdev.name}</h3>
					          </div>
					          <div className="hide-on-small-only">
					            <h3 className="white-text" style={{fontWeight: 'light'}}>{this.state.jrdev.name}</h3>
					          </div>
					          <div className="hide-on-small-only">                                  
					            <span className="white-text">Username: {this.state.jrdev.username}</span>
					          </div>
					        </div>
					      </div>
					    </div>
					  </div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col s12">
								<div className="row">
									<span className="col s12">
										STATS:
									</span>
									<div className="col s12">
										<div className="card">
												<div className="card-content center hide-on-small-only">
													<ExercisesByDayChart data={this.state.completed_by_day} yTicks={2} height={this.state.height/2.25} width={this.state.width/1.5}/>
												</div>
												<div className="card-content center hide-on-med-and-up">
													<ExercisesByDayChart data={this.state.completed_by_day} yTicks={2} height={this.state.height/3} width={this.state.width/1.8}/>
												</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col s12 m8" style={{height: '100%'}}>
								<div className="row">
									<span className="col s12">
									  LESSONS:
									</span>
									<div>
										<div className="row">
											<Lessons lessons={this.state.lessons} links={false}/>
										</div>
									</div>
								</div>
							</div >

							<div className="col s12 m4">
								<div className="row">
									<span className="col s12">
									  CLASSROOMS:
									</span>
									
									<div>
										<div className="row">
											{this.displayClassrooms()}
										</div>
									</div>
																		
								</div>

								<div className="row">
									<span className="col s12">
									  MENTORS:
									</span>
									
									<div>
										<div className="row">
											{this.displayMentors()}
										</div>
									</div>
																		
								</div>
							</div>

						</div>
					</div>
				</div>
			)
		} else {
			return(<h3>Loading...</h3>)
		}
	}

}

export default Jrdev