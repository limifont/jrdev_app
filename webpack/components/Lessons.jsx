import React from 'react'
import LinearProgress from 'material-ui/LinearProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router'

class Lessons extends React.Component {
	constructor(props) {
		super(props)
		this.displayLessons = this.displayLessons.bind(this)
		this.displayCheck = this.displayCheck.bind(this)
	}

	displayLessonName(lesson) {
		if(this.props.links) {
			return(<h4 className="lessons-title"><Link to={`/lesson/${lesson.id}`}>{lesson.name}</Link></h4>)
		} else {
			return(<h4 className="lessons-title">{lesson.name}</h4>)
		}
	}

	displayCheck(check) {
		if(check === 'true') {
			return (
				<i className="material-icons">done</i>
			)
		}
	}

	progressBar(lesson) {
		let complete = lesson.exercises_completed_count
		let total = lesson.exercises_count
		let num = Math.round( (complete/total) * 100 )
		let check = lesson.completed.toString()
		if(check === 'false') {
			return(
				<div className="row valign-wrapper">  
				  <div className="valign col s9 offset-s1">
				  	<LinearProgress mode="determinate" max={lesson.exercises_count} value={lesson.exercises_completed_count}  />
				  </div>
				  <div className="valign col s2">
				  	<p>{num}%</p>
				  </div>
				</div>
			)
		}
	}

	displayLessons() {
		return this.props.lessons.map( lesson => {
			let check = lesson.completed.toString()
			let icon = lesson.icon_url
			console.log(icon);
			return(
				<MuiThemeProvider key={`lesson-${lesson.id}`}>
					<div className="col s12">
						<div className="card">	
							<div className="card-content">
								<div className="row valign-wrapper">
									<div className="valign col s3" style={{maxWidth: '100%', maxHeight: '100%'}}>
										<img src={icon} style={{maxWidth: '100%', maxHeight: '100%'}}/>
									</div>
									<div className="valign col s9 left-align">
		            		{this.displayLessonName(lesson)}{this.displayCheck(check)}
		            	</div>
								</div>
								{this.progressBar(lesson)}
		          </div>
		        </div>
	        </div>
		    </MuiThemeProvider>
			)
		})
	}

	render() {
		return (
			<div>
				{this.displayLessons()}
			</div>
		)
	}
}



export default Lessons