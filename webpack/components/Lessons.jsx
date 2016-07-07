import React from 'react'
import LinearProgress from 'material-ui/LinearProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Lessons extends React.Component {
	constructor(props) {
		super(props)
		this.state = { allLessons: [], ProgressCompleted: 0, }
		this.displayLessons = this.displayLessons.bind(this)
	}

	componentWillMount() {
		$.ajax({
			url: 'api/lessons',
			type: 'GET',
			dataType: 'JSON'
		}).done( allLessons => {
			this.setState({ allLessons })
		}).fail( data => {
			console.log("Failure to get all lessons", data)
		})
	}

	displayLessons() {
		return this.state.allLessons.map( lesson => {
			return(
				<MuiThemeProvider>
					<div className="row">
						<h4>{lesson.name}</h4>
						<p>Completed: {lesson.completed.toString()}</p>
						<p>You have completed {lesson.exercises_completed_count} of {lesson.exercises_count} exercises</p>
						<div className="col m2">
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