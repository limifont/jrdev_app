import React from 'react'
import {BarChart} from 'react-easy-chart';
import ToolTip from './ToolTip';

class ClassesAverages extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showToolTip: false, data: [], average_total: 0 }
	}

	componentWillMount() {
		$.ajax({
			url: '/api/show_classroom_averages',
			type: 'GET',
			dataType: 'JSON'
		}).done( data => {
			this.setState({ data: data.classrooms, average_total: data.average_total })
		}).fail( data  => {
			console.log("failed to get classroom averages", data)
		})
	}

	mouseOverHandler(d, e) {
		  this.setState({
		    showToolTip: true,
		    top: `${e.screenY - 10}px`,
		    left: `${e.screenX + 10}px`,
		    y: d.y,
		    x: d.x});
		}

		mouseMoveHandler(e) {
		  if (this.state.showToolTip) {
		    this.setState({top: `${e.y - 10}px`, left: `${e.x + 10}px`});
		  }
		}

		mouseOutHandler() {
		  this.setState({showToolTip: false});
		}

	render() {
		if(this.state.data.length > 0) {
			if(this.state.average_total > 0) {
				return(
					<div className="card-content center">
						<span>AVERAGE COMPLETED EXERCISES</span>
						<BarChart
						  margin={{top: 7, right: 20, bottom: 25, left: -5}}
						  axes
						  grid
						  colorBars
						  xType={'text'}
						  height={this.props.height}
						  width={this.props.width}
						  data={ this.state.data }
						  mouseOverHandler={this.mouseOverHandler.bind(this)}
						  mouseOutHandler={this.mouseOutHandler.bind(this)}
						  mouseMoveHandler={this.mouseMoveHandler.bind(this)}
						/>
						{this.state.showToolTip ? <ToolTip top={this.state.top} left={this.state.left}>Averge exercises completed: {this.state.y}</ToolTip> : null}
					</div>
				)
			} else {
				return(
					<div className="card-content center">
						<div>
							<span>COMPLETE SOME EXERCISES!</span>
							<h5 className="center">Looks like no exercises have been completed yet.</h5>
						</div>
					</div>
				)
			}
		} else {
			return(
				<div className="card-content center">
					<span>ADD A CLASSROOM!</span>
					<div>
						<h5 className="center">Once you add some classrooms and some students, you'll see some nifty stats here!</h5>
					</div>
				</div>
			)
		}
	}
}

export default ClassesAverages