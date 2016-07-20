import React from 'react';
import ReplitClient from 'replit-client';
import brace from 'brace';
import AceEditor from 'react-ace';
import { browserHistory, Link } from 'react-router'
import 'brace/mode/ruby';
import 'brace/theme/crimson_editor';

class Sandbox extends React.Component {
	constructor(props) {
		super(props)
		this.state = { results: [], endMessage: false, exerciseMessage: false, exerciseFailMessage: false }
		this.onChange = this.onChange.bind(this)
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
		  	}
		  }
		}).then(
		  function success(result) {
		    // The evaluation succeeded. Result will contain `data` or `error`
		    // depending on whether the code compiled and ran or if there was an
		    // error.
		    if (result.error) {
		    	self.setState({ results: [...self.state.results, result.error, "\n"] })
		    } else {
		    }
		  },

		  function error(error) {
		    // There was an error connecting to the service :(
		  }
		);
	}

	clearConsole() {
		this.setState({ results: [] })
	}

	render() {
		return (
			<div>
				<div style={{backgroundImage: 'url(http://res.cloudinary.com/di0vizmtw/image/upload/v1468821593/splashpic2_copy_ber9cl.jpg)', height: '45vh', marginBottom: '5vh'}}>
				  <div style={{width: '100%', height: '100%', background: 'rgba(0,0,0,.3)'}}>
				    <div className="container">
				      <div className="row">
				        <div className="col s12 m6" style={{marginTop: '20vh'}}>
				          <div className="hide-on-med-and-up">
				            <h3 className="white-text center" style={{fontWeight: 'light'}}>SANDBOX</h3>
				          </div>
				          <div className="hide-on-small-only">
				            <h3 className="white-text" style={{fontWeight: 'light'}}>SANDBOX</h3>
				          </div>
				          <div className="hide-on-small-only">                                  
				            <span className="white-text">Here you can do whatever you want! <br/>Experimenting with code is one of the best ways to learn!</span>
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				</div>

				<div className="container">
					

						<div className="row">
							<div className="col s12 m6">
								<div className="card">
									<div id="sandboxEditorContainer">
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
									<div className="console" style={{backgroundColor: 'black', color: 'green', height: '50vh', padding: '5px', whiteSpace: 'pre', overflow: "scroll"}}>
										{this.state.results}
									</div>
								</div>
							</div>
						</div>

						<div className='clearfix'></div>
						<button className="btn" onClick={this.replCode.bind(this)} style={{margin: '10px'}}>Run</button>
						<button className="btn" onClick={this.clearConsole.bind(this)} style={{margin: '10px', float: 'right'}}>Clear Console</button>
				</div>
			</div>
		)
	}
}

export default Sandbox;
