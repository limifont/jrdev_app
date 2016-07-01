import React from 'react';

class Lesson extends React.Component {
	constructor(props) {
		super(props)
		this.state = {result: null}
	}

	submitCode() {
		$.ajax({
			url: '/api/run_code',
			type: 'POST',
			dataType: 'JSON',
			data: { code: editor.getValue() }
		}).done( result => {
			this.setState({ result: result.toString() })
		}).fail( data => {
			debugger
		})
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
					<div className="console">
						{this.state.result}
					</div>
				</div>
				<div className='clearfix'></div>
				<button className="btn" onClick={this.submitCode.bind(this)}>Run</button>
			</div>
		)
	}
}

export default Lesson;