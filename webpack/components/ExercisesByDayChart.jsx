import React from 'react';
import { AreaChart } from 'react-easy-chart';
import ToolTip from './ToolTip';

class ExercisesByDayChart extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<AreaChart 
			interpolate='cardinal'
			axes
			height={300}
			width={500}
			xType={'text'}
			yTicks={3}
			areaColors={['#130069']}
			data={[this.props.data]}/>
		)
	}
}

export default ExercisesByDayChart