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
			return(
				<MuiThemeProvider key={`lesson-${lesson.id}`}>
					<div className="card-content">
            <span className="card-title">{this.displayLessonName(lesson)}</span>
            <p>Completed: {lesson.completed.toString()}</p>
            <div className="col m5">
            	<LinearProgress mode="determinate" max={lesson.exercises_count} value={lesson.exercises_completed_count}  />
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
		);
	}
}

export default Lessons