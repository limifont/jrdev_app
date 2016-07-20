import React from 'react';
import { AreaChart } from 'react-easy-chart';
import ToolTip from './ToolTip';

class ExercisesByDayChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showToolTip: false}
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
		if(this.props.data.length > 1) {
			return(
					<div>
						{this.state.showToolTip ? <ToolTip top={this.state.top} left={this.state.left}>{this.state.y} exercise on {this.state.x}</ToolTip> : null}
						<span>Exercises Completed By Day</span>
						<AreaChart 
						margin={{top: 0, right: 0, bottom: 0, left: 0}}
						interpolate='cardinal'
						axes
						dataPoints
						height={this.props.height}
						width={this.props.width}
						xType={'text'}
						yTicks={this.props.yTicks}
						areaColors={['#130069']}
						data={[this.props.data]}
						clickHandler={(d) => this.setState({dataDisplay: `${d.y} EXERCISES WERE COMPLETED ON ${d.x}`})}
						mouseOverHandler={this.mouseOverHandler.bind(this)}
					  mouseOutHandler={this.mouseOutHandler.bind(this)}
					  mouseMoveHandler={this.mouseMoveHandler.bind(this)}
						/>
						<div style={{display: 'inline-block', verticalAlign: 'top', paddingLeft: '20px'}}>
							{this.state.dataDisplay ? this.state.dataDisplay : ''}
						</div>						
					</div>
			)
		} else  {
			return(<div></div>)
		}
	}
}

export default ExercisesByDayChart