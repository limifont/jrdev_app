import React from 'react';
import { AreaChart } from 'react-easy-chart';
import ToolTip from './ToolTip';

class ExercisesByMonthChart extends React.Component {
	constructor(props) {
		super(props)
		this.state = { jrdev: null, stats: [] }
	}

	render() {
		return(
			<AreaChart data={[[{x: 1, y: 5}, {x: 2, y: 7}, {x: 3, y: 1}]]}/>
		)
	}
}

export default ExercisesByMonthChart