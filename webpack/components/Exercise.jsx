import React from 'react';
import ReplitClient from 'replit-client';
import brace from 'brace';
import AceEditor from 'react-ace';
import { browserHistory } from 'react-router'

import 'brace/mode/ruby';
import 'brace/theme/crimson_editor';

import Achievement from './Achievement';

class Exercise extends React.Component {
	constructor(props) {
		super(props)
		this.state = {exercise: null, results: [], value: null, last: false, first: false, completed: false, message: false}
		this.onChange = this.onChange.bind(this)
		this.checkAnswer = this.checkAnswer.bind(this)
		this.nextButton = this.nextButton.bind(this)
		this.previousButton = this.previousButton.bind(this)
		this.popup = this.popup.bind(this)
	}

  componentWillMount() {
    $.ajax({
      url: `/api/lessons/${this.props.params.lesson_id}/exercises/${this.props.params.exercise_position}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( result => {
    	console.log('hey', result)
    	this.setState({ exercise: result.exercise, value: result.exercise.prefill, last: result.last, first: result.first, completed: result.completed })
    }).fail( data => {
    	console.log('failure', data)
    })
  }

	onChange(newValue) {
	  this.setState({ value: newValue });
	  console.log(this.state.value)
	}

	replCode() {
		var repl = new ReplitClient('api.repl.it', 80, 'ruby', {msg_mac: localStorage.getItem('token'), time_created: localStorage.getItem('time_created')})
		self = this
		repl.evaluateOnce(
		  self.state.value, {
		  stdout: (output) => {
		  	if(output !== "\n") {
        self.setState({ results: [...self.state.results, output, "\n"] })
        this.checkAnswer()
		  	}
		  }
		}).then(
		  function success(result) {
		    // The evaluation succeeded. Result will contain `data` or `error`
		    // depending on whether the code compiled and ran or if there was an
		    // error.
		    if (result.error) {
		    	self.setState({ results: [...self.state.results, result.error, "\n"] })
		      console.log('Error:', result.error);
		    } else {
		      console.log('Result:', result.data);
		    }
		  },

		  function error(error) {
		    // There was an error connecting to the service :(
		    console.error('Error connecting to repl.it');
		  }
		);
	}

	checkAnswer() {
		console.log('current output', this.state.results)
		console.log(this.state.exercise.expected_output)

		if(this.state.results[this.state.results.length - 2] === this.state.exercise.expected_output) {
			if(!this.state.completed) {
				$.ajax({
					url: '/api/completed_exercises',
					type: 'POST',
					dataType: 'JSON',
					data: { id: this.state.exercise.id }
				}).done( result => {
					this.setState({ completed: true, message: true })
				}).fail( result => {
					console.log("failed to mark exercise as completed")
				})
			}
		}
	}

	popup() {
		if (this.state.message){
			return (
				<Achievement />
			)
		} else {
			return (
				<p>Not Completed</p>
			)
		}
	}

	nextButton() {
		if(!this.state.last) {
			if(this.state.completed) {
				return (
					<button className="btn right" style={{margin: '10px'}} onClick={this.goToNext.bind(this)}>Next</button>
				)
			} else {
				return (
					<button className="btn right disabled" style={{margin: '10px'}}>Next</button>
				)
			}
		} else {
			if(this.state.completed) {
				return (
					<button className="btn right" style={{margin: '10px'}} onClick={this.goToNextLesson.bind(this)}>Next Lesson</button>
				)
			} else {
				return (
					<button className="btn right disabled" style={{margin: '10px'}}>Next Lesson</button>
				)
			}
		}
	}

	goToNext() {
		browserHistory.push(`/lesson/${this.props.params.lesson_id}/exercise/${parseInt(this.props.params.exercise_position) + 1}`)
		$.ajax({
      url: `/api/lessons/${this.props.params.lesson_id}/exercises/${parseInt(this.props.params.exercise_position) + 1}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( result => {
    	this.setState({ exercise: result.exercise, results: [], value: result.exercise.prefill, last: result.last, first: result.first, completed: result.completed })
    }).fail( data => {
    	console.log('failure', data)
    })
	}

	goToNextLesson() {
		browserHistory.push(`/lesson/${parseInt(this.props.params.lesson_id) + 1}/exercise/1`)
		$.ajax({
      url: `/api/lessons/${parseInt(this.props.params.lesson_id) + 1}/exercises/1`,
      type: 'GET',
      dataType: 'JSON'
    }).done( result => {
    	this.setState({ exercise: result.exercise, results: [], value: result.exercise.prefill, last: result.last, first: result.first, completed: result.completed })
    }).fail( data => {
    	console.log('failure', data)
    })
	}

	previousButton() {
		if(!this.state.first) {
			return (
				<button className="btn right" style={{margin: '10px'}} onClick={this.goToPrevious.bind(this)}>Previous</button>
			)
		}
	}

	goToPrevious() {
		browserHistory.push(`/lesson/${this.props.params.lesson_id}/exercise/${parseInt(this.props.params.exercise_position) - 1}`)
		$.ajax({
      url: `/api/lessons/${this.props.params.lesson_id}/exercises/${parseInt(this.props.params.exercise_position) - 1}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( result => {
    	this.setState({ exercise: result.exercise, value: result.exercise.prefill, last: result.last, first: result.first, completed: result.completed })
    }).fail( data => {
    	console.log('failure', data)
    })
	}

	render() {
		if(this.state.exercise) {
			return (
				<div className="row">
	        <div className="col m10 offset-m1">
	        	<div style={{backgroundColor: "white", borderRadius: "5px", margin: "10px 0 5px 0", padding: "5px", whiteSpace: "per"}}>
		        	<p dangerouslySetInnerHTML={{__html: this.state.exercise.instruction}}></p>
	        	</div>
	        </div>
					{this.popup()}
					<div className="col m6">
						<div id="editorContainer">
							<div id="editor">
								<AceEditor
							    mode="ruby"
							    theme="crimson_editor"
							    onChange={this.onChange}
							    name="UNIQUE_ID_OF_DIV"
							    tabSize={2}
							    height="100%"
							    width="100%"
							    value={this.state.value || ''}
							    editorProps={{$blockScrolling: true}}
							  />
						  </div>
							&nbsp;
						</div>
					</div>
					<div className="col m6">
						<div className="console" style={{backgroundColor: 'black', color: 'green', height: '80vh', padding: '5px', whiteSpace: 'pre'}}>
							{this.state.results}
						</div>
					</div>
					<div className='clearfix'></div>
					<button className="btn" onClick={this.replCode.bind(this)} style={{margin: '10px'}}>Run</button>
					{this.nextButton()}
					{this.previousButton()}
				</div>
			)
		} else {
			return (
				<h3 className="center">Loading</h3>
			)
		}
	}
}

export default Exercise;
