import React from 'react'
import LinearProgress from 'material-ui/LinearProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router'

class Lessons extends React.Component {
	constructor(props) {
		super(props)
		this.displayLessons = this.displayLessons.bind(this)
	}

	displayLessonName(lesson) {
		if(this.props.links) {
			return(<h4><Link to={`/lesson/${lesson.id}`}>{lesson.name}</Link></h4>)
		} else {
			return(<h4>{lesson.name}</h4>)
		}
	}

	displayLessons() {
		return this.props.lessons.map( lesson => {
			let check = lesson.completed.toString()
			if(check === 'true' ) {
				return(
					<MuiThemeProvider key={`lesson-${lesson.id}`}>
						<div className="col s12 m12">
							<div className="card">	
								<div className="card-content">
			            <span className="card-title">{this.displayLessonName(lesson)}<i className="material-icons">done</i></span>
			          </div>
			        </div>
		        </div>
			    </MuiThemeProvider>
				)
			} else {
				let complete = lesson.exercises_completed_count
				let total = lesson.exercises_count
				let num = total - complete
				return(
					<MuiThemeProvider key={`lesson-${lesson.id}`}>
						<div className="col s12 m12">
							<div className="card">		
								<div className="card-content">
			            <span className="card-title">{this.displayLessonName(lesson)} ({complete}/{total})</span>
			            <div className="col s12 m12">
			            	<LinearProgress mode="determinate" max={lesson.exercises_count} value={lesson.exercises_completed_count}  />
			            </div>
			          </div>
			    		</div>
			    	</div>      	
			    </MuiThemeProvider>
				)
			}
		})
	}

	render() {
		return (
			<div className="card-content">	
				<span className="card-title">
					Lessons:
				</span>
				<div>
					<div className="row">
						{this.displayLessons()}
					</div>
				</div>
			</div>
		);
	}
}

export default Lessons