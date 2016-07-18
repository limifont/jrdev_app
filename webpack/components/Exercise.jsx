import React from 'react';
import ReplitClient from 'replit-client';
import brace from 'brace';
import AceEditor from 'react-ace';
import { browserHistory } from 'react-router'


import 'brace/mode/ruby';
import 'brace/theme/crimson_editor';

import Achievement from './Achievement';
import ExcercisePopup from './ExcercisePopup';
import ExcerciseFailPopup from './ExcerciseFailPopup';

class Exercise extends React.Component {
	constructor(props) {
		super(props)
		this.state = {exercise: null, results: [], value: null, last: false, first: false, completed: false, endMessage: false, exerciseMessage: false, exerciseFailMessage: false }
		this.onChange = this.onChange.bind(this)
		this.checkAnswer = this.checkAnswer.bind(this)
		this.nextButton = this.nextButton.bind(this)
		this.previousButton = this.previousButton.bind(this)
		this.popup = this.popup.bind(this)
		this.exercisePopup = this.exercisePopup.bind(this)
		this.exerciseFailPopup = this.exerciseFailPopup.bind(this)
		this.checkAnswerAjax = this.checkAnswerAjax.bind(this)
	}

  componentWillMount() {
    $.ajax({
      url: `/api/lessons/${this.props.params.lesson_id}/exercises/${this.props.params.exercise_position}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( result => {
    	this.setState({ exercise: result.exercise, value: result.exercise.prefill, last: result.last, first: result.first, completed: result.completed })
    }).fail( data => {
    	console.log('failure', data)
    })
  }

  componentDidMount() {
  	this.focusEditor();
  }

  focusEditor() {
  	window.setTimeout(function(){
      var content = $('.ace_text-input:first');
      content.focus();
		}, 300); 
  }

	onChange(newValue) {
	  this.setState({ value: newValue });
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
		if(!$('.console').html()) {
			$('.console').empty("");
		}

		this.setState({ exerciseFailMessage: false, exerciseMessage: false })
		console.log('current output', this.state.results)
		console.log(this.state.exercise.expected_output)

		let regEx = new RegExp(this.state.exercise.expected_output)
		let codeRegEx = new RegExp(this.state.exercise.expected_code)

		if(this.state.exercise.output_regex == true) {
			if(this.state.exercise.code_regex == true) {
				if(regEx.test(this.state.results[this.state.results.length -2]) && codeRegEx.test(this.state.value)) {
					this.setState({ exerciseMessage: true })
					this.checkAnswerAjax()
				} else {
					this.setState({ exerciseFailMessage: true})
				}
			} else {	
				if(regEx.test(this.state.results[this.state.results.length -2]) && this.state.value === this.state.exercise.expected_code) {
					this.setState({ exerciseMessage: true })
					this.checkAnswerAjax()
				} else {
					this.setState({ exerciseFailMessage: true})
				}
			}
		} else {
			if(this.state.exercise.code_regex == true) {
				if(this.state.results[this.state.results.length - 2] === this.state.exercise.expected_output && codeRegEx.test(this.state.value)) {
					this.setState({ exerciseMessage: true })
					this.checkAnswerAjax()
				} else {
					this.setState({ exerciseFailMessage: true})
				}
			} else {
	      if(this.state.results[this.state.results.length - 2] === this.state.exercise.expected_output && this.state.value === this.state.exercise.expected_code) {
					this.setState({ exerciseMessage: true })
					this.checkAnswerAjax()
				} else {
					this.setState({ exerciseFailMessage: true})
				}
			}
		}
	}

	checkAnswerAjax() {
		if(!this.state.completed) {
			$.ajax({
				url: '/api/completed_exercises',
				type: 'POST',
				dataType: 'JSON',
				data: { id: this.state.exercise.id }
			}).done( result => {
				this.setState({ completed: true})
			}).fail( result => {
				console.log("failed to mark exercise as completed")
			})
			if(this.state.last) {
				$.ajax({
					url: '/api/completed_lessons',
					type: 'POST',
					dataType: 'JSON',
					data: { id: this.props.params.lesson_id }
				}).done( result => {
					this.setState({ endMessage: true })
				}).fail( result => {
					console.log("failed to mark lesson as completed")
				})
			}
		}
	}


	popup() {
		if (this.state.endMessage){
			return (
				<Achievement />
			)
		}
	}

	exercisePopup() {
		if (this.state.exerciseMessage){
			return (
				<ExcercisePopup />
			)
		}
	}

	exerciseFailPopup() {
		if (this.state.exerciseFailMessage){
			return (
				<ExcerciseFailPopup />
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
    	this.setState({ exercise: result.exercise, results: [], value: result.exercise.prefill, last: result.last, first: result.first, completed: result.completed });
    	this.focusEditor();
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
    	this.setState({ exercise: result.exercise, results: [], value: result.exercise.prefill, last: result.last, first: result.first, completed: result.completed, endMessage: false  })
    	this.focusEditor();
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
    	this.focusEditor();
    }).fail( data => {
    	console.log('failure', data)
    })
	}

	render() {
		if(this.state.exercise) {
			return (
				<div className="container">
					<div className="row">
		        <div className="col s12 m12">
			        <div className="card">
			        	<div style={{backgroundColor: "white", borderRadius: "5px", margin: "10px 0 5px 0", padding: "5px", whiteSpace: "per"}}>
				        	<span className="card-title"><p className="center" style={{margin: "4px 0 4px 0"}}>{this.state.exercise.name}</p></span>
				        	<p dangerouslySetInnerHTML={{__html: this.state.exercise.instruction}}></p>
			        	</div>
			        </div>
		        </div>
						{this.popup()}
					</div>

						<div className="row">
							<div className="col s12 m6">
								<div className="card">
									<div id="editorContainer">
										<div>
											<AceEditor
												autofocus={true}
										    mode="ruby"
										    theme="crimson_editor"
										    onChange={this.onChange}
										    name="editor"
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
							</div>

							
							<div className="col s12 m6">
								<div className="card">	
									<div className="console" style={{backgroundColor: 'black', color: 'green', height: '40vh', padding: '5px', whiteSpace: 'pre'}}>
										{this.state.results}
									</div>
								</div>
							</div>
						</div>

						<div className='clearfix'></div>
						<button className="btn" onClick={this.replCode.bind(this)} style={{margin: '10px'}}>Run</button>
						{this.nextButton()}
						{this.previousButton()}
						{this.exercisePopup()}
						{this.exerciseFailPopup()}
					
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
