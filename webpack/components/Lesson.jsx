import React from 'react';
import ReplitClient from 'replit-client';

class Lesson extends React.Component {
	constructor(props) {
		super(props)
		this.state = {results: []}
	}

	replCode() {
		var repl = new ReplitClient('api.repl.it', 80, 'ruby', {msg_mac: localStorage.getItem('token'), time_created: localStorage.getItem('time_created')})
		self = this
		repl.evaluateOnce(
		  editor.getValue(), {
		  stdout: (output) => {
		    console.log(output);
		    self.setState({ results: [...self.state.results, output] })
		  }
		}).then(
		  function success(result) {
		    // The evaluation succeeded. Result will contain `data` or `error`
		    // depending on whether the code compiled and ran or if there was an
		    // error.
		    if (result.error) {
		    	self.setState({ results: [...self.state.results, result.error] })
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

	render() {
		return (
			<div className="row">
				<div className="col m6">
					<div id="editorContainer">
						<div id="editor">
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
	}
}

export default Lesson;