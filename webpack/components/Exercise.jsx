import React from 'react';
import ReplitClient from 'replit-client';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/ruby';
import 'brace/theme/crimson_editor';


class Lesson extends React.Component {
	constructor(props) {
		super(props)
		this.state = {exercise: null, results: [], value: null, last: false}
		this.onChange = this.onChange.bind(this)
		this.checkAnswer = this.checkAnswer.bind(this)
	}

  componentWillMount() {
    $.ajax({
      url: `/api/lessons/${this.props.params.lesson_id}/exercises/${this.props.params.exercise_id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( result => {
    	this.setState({ exercise: result.exercise, value: result.exercise.prefill, last: result.last })
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
			alert("Correct!")
		}
		//trigger modal if answer is correct
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
