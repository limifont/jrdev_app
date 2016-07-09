import React from 'react';
import {BarChart} from 'react-easy-chart';
import ToolTip from './ToolTip';

class ClassroomGraph extends React.Component {
    constructor(props) {
      super(props);
      this.state = { showToolTip: false, student_stats: [] };
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
			}).done( student_stats => {
				this.setState({ student_stats })
			}).fail( data  => {
				alert('fail to update the class chart')
			})
		}

    render() {
    	if (this.state.student_stats.length > 0) {
	      return(
	      	<div style={{display: 'inline-block'}}>
					  <BarChart
						  axisLabels={{x: 'Students', y: 'Excercise Completed'}}
						  axes
						  grid
						  colorBars
						  yAxisOrientRight
						  xType={'text'}
						  height={250}
						  width={450}
						  data={ this.state.student_stats }
						  mouseOverHandler={this.mouseOverHandler.bind(this)}
						  mouseOutHandler={this.mouseOutHandler.bind(this)}
						  mouseMoveHandler={this.mouseMoveHandler.bind(this)}
						/>
					</div>
	      );
	    } else {
	    	return (<h6>Loading...</h6>)
	    }
    }
}

export default ClassroomGraph;
