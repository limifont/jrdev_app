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
			return(<h4 className="lessons-title"><Link to={`/lesson/${lesson.id}`}>{lesson.name}</Link></h4>)
		} else {
			return(<h4>{lesson.name}</h4>)
		}
	}

	displayLessons() {
		return this.props.lessons.map( lesson => {
			let check = lesson.completed.toString()
			let icon = lesson.icon_url
			console.log(icon);
			if(check === 'true' ) {
				return(
					<MuiThemeProvider key={`lesson-${lesson.id}`}>
						<div className="col s12 m12">
							<div className="card">	
								<div className="card-content">
									<div className="row" style={{overflow: 'hide'}}>
										<div className="col s3 m3 l3" style={{maxWidth: '100%', maxHeight: '100%'}}>
											<img src={icon} style={{maxWidth: '100%', maxHeight: '100%'}}/>
										</div>
										<div className="col s9 m9 l9">
			            		<h3 className="lessons-title">{this.displayLessonName(lesson)}<i className="material-icons">done</i></h3>
			            	</div>
									</div>
			          </div>
			        </div>
		        </div>
			    </MuiThemeProvider>
				)
			} else {
				let complete = lesson.exercises_completed_count
				let total = lesson.exercises_count
				let num = Math.round( (complete/total) * 100 )
				return(
					<MuiThemeProvider key={`lesson-${lesson.id}`}>
						<div className="col s12 m12">
							<div className="card">		
								<div className="card-content">
			            <div className="row valign-wrapper">
			            	<div className="valign col s3" style={{maxWidth: '100%', maxHeight: '100%'}}>
											<img src={icon} style={{maxWidth: '100%', maxHeight: '100%'}}/>
										</div>
			            	<div className="valign col s9 left-align">
			            		{this.displayLessonName(lesson)}
			            	</div>
			            </div>
				          <div className="row valign-wrapper">  
				            <div className="valign col s11">
				            	<LinearProgress mode="determinate" max={lesson.exercises_count} value={lesson.exercises_completed_count}  />
				            </div>
				            <div className="valign col s1">
				            	<p>{num}%</p>
				            </div>
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
			<div>
				{this.displayLessons()}
			</div>
		);
	}
}



export default Lessons