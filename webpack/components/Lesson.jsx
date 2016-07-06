import React from 'react';
import ReplitClient from 'replit-client';

class Lesson extends React.Component {
	constructor(props) {
		super(props)
		this.state = {exercise: null, results: []}
	}

	replCode() {
		var repl = new ReplitClient('api.repl.it', 80, 'ruby', {msg_mac: localStorage.getItem('token'), time_created: localStorage.getItem('time_created')})
		self = this
		repl.evaluateOnce(
		  editor.getValue(), {
		  stdout: (output) => {
		    console.log(output);
        self.setState({ results: [...self.state.results, output] })
        debugger
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

	render() {
		return (
			<div className="row">
				<h1>Lesson Component</h1>
			</div>
		)
	}
}

export default Lesson;