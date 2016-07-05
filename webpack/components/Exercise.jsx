import React from 'react';
import ReplitClient from 'replit-client';
import brace from 'brace';
import AceEditor from 'react-ace';
import { browserHistory } from 'react-router'

import 'brace/mode/ruby';
import 'brace/theme/crimson_editor';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Lesson extends React.Component {
	constructor(props) {
		super(props)
		this.state = {exercise: null, results: [], value: null, last: false, first: false, completed: false, ModalOpen: false}
		this.onChange = this.onChange.bind(this)
		this.checkAnswer = this.checkAnswer.bind(this)
		this.nextButton = this.nextButton.bind(this)
		this.previousButton = this.previousButton.bind(this)
	}

  componentWillMount() {
    $.ajax({
      url: `/api/lessons/${this.props.params.lesson_id}/exercises/${this.props.params.exercise_id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( result => {
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
		      console.log('Result', result.data);
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
			$.ajax({
				url: '/api/completed_exercises',
				type: 'POST',
				dataType: 'JSON',
				data: { id: this.state.exercise.id }
			}).done( result => {
				this.setState({ completed: true })
			}).fail( result => {
				console.log("failed to mark exercise as completed")
			})
			handleOpen();
		}
	}

  handleOpen = () => {
    this.setState({ModalOpen: true});
    achievement();
  };

  handleClose = () => {
    this.setState({ModalOpen: false});
  };

  achievement() {
	    return (
	      <div>
	        <Dialog
	          open={this.state.ModalOpen}
	          onRequestClose={this.handleClose}
	        >
	          Good Job
	        </Dialog>
	      </div>
	    );
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
		} 
	}

	goToNext() {
		browserHistory.push(`/lesson/${this.props.params.lesson_id}/exercise/${parseInt(this.props.params.exercise_id) + 1}`)
		$.ajax({
      url: `/api/lessons/${this.props.params.lesson_id}/exercises/${parseInt(this.props.params.exercise_id) + 1}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( result => {
    	this.setState({ exercise: result.exercise, value: result.exercise.prefill, last: result.last, first: result.first, completed: result.completed })
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
		browserHistory.push(`/lesson/${this.props.params.lesson_id}/exercise/${parseInt(this.props.params.exercise_id) - 1}`)
		$.ajax({
      url: `/api/lessons/${this.props.params.lesson_id}/exercises/${parseInt(this.props.params.exercise_id) - 1}`,
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
							    value={this.state.value}
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

export default Lesson;
