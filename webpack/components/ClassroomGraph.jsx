import React from 'react';
import {BarChart} from 'react-easy-chart';
import ToolTip from './ToolTip';

class ClassroomGraph extends React.Component {
    constructor(props) {
      super(props);
      this.state = { showToolTip: false, student_stats: [], completed_total: 0 };
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

		componentWillMount() {
			$.ajax({
				url: `/api/student_stats/${this.props.classroom.id}`,
				type: 'GET',
				dataType: 'JSON',
			}).done( stats => {
				let student_stats = [];
				let completed_total = 0;
				for (let student of stats) {
					student_stats.push({x: student.name, y: student.completed_count})
					completed_total += student.completed_count
				}
				this.setState({ student_stats, completed_total })
			}).fail( data  => {
				alert('fail to update the class chart')
			})
		}

    render() {
    	if (this.state.student_stats.length > 0) {
	      return(
	      	<div style={{display: 'inline-block'}}>
	      		<h5>Exercises Completed</h5>
					  <BarChart
						  axisLabels={{x: 'Students', y: 'Excercise Completed'}}
						  axes
						  grid
						  colorBars
						  xType={'text'}
						  height={250}
						  width={450}
						  data={ this.state.student_stats }
						  mouseOverHandler={this.mouseOverHandler.bind(this)}
						  mouseOutHandler={this.mouseOutHandler.bind(this)}
						  mouseMoveHandler={this.mouseMoveHandler.bind(this)}
						/>
						{this.state.showToolTip ? <ToolTip top={this.state.top} left={this.state.left}>{this.state.x} has completed {this.state.y} excercises</ToolTip> : null}
					</div>
	      );
	    } else {
	    	return (
	    		<h6 className="center">Once your add some students, you'll see some cool stats here. Added students but still can't see the stats? Try refreshing!</h6>
	    	)
	    }
    }
}

export default ClassroomGraph;
