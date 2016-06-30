import React from 'react';

class Lesson extends React.Component {
	constructor(props) {
		super(props)
	}

	submitCode() {
		debugger
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
				<div className="col m6 offset-m6">
					<div className="console">
					</div>
				</div>
				<button className="btn" onClick={this.submitCode.bind(this)}>Run</button>
			</div>
		)
	}
}

export default Lesson;