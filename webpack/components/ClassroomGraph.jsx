import React from 'react';
import {BarChart} from 'react-easy-chart';
import ToolTip from './ToolTip';

class ClassroomGraph extends React.Component {
    constructor(props) {
      super(props);
      this.state = { showToolTip: false };
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
      return(
      	<div style={{display: 'inline-block'}}>
				  <BarChart
					  axisLabels={{x: 'x Axis Labels', y: 'y Axis Labels'}}
					  axes
					  grid
					  colorBars
					  yAxisOrientRight
					  height={250}
					  width={450}
					  data={[
					  	// jrdev info in the class
					   {
					     'x': 'A',
					     'y': 46
					   },
					   {
					     'x': 'B',
					     'y': 26
					   },
					    {
					     'x': 'c',
					     'y': 6
					   },
					    {
					     'x': 'D',
					     'y': 36
					   },
					    {
					     'x': 'E',
					     'y': 23
					   },
					    {
					     'x': 'F',
					     'y': 25
					   },
					    {
					     'x': 'G',
					     'y': 10
					   },
					  ]}
					  mouseOverHandler={this.mouseOverHandler.bind(this)}
					  mouseOutHandler={this.mouseOutHandler.bind(this)}
					  mouseMoveHandler={this.mouseMoveHandler.bind(this)}
					  yDomainRange={[0, 100]}
					/>
				</div>
      );
    }
}

export default ClassroomGraph;
