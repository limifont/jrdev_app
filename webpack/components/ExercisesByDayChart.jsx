import React from 'react';
import { AreaChart } from 'react-easy-chart';
import ToolTip from './ToolTip';

class ExercisesByDayChart extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		if(this.props.data.length > 1) {
			return(
				<div className="card">
					<AreaChart 
					interpolate='cardinal'
					axes
					height={100}
					width={600}
					xType={'text'}
					yTicks={3}
					areaColors={['#130069']}
					data={[this.props.data]}/>
				</div>
			)
		} else  {
			return(<div></div>)
		}
	}
}

export default ExercisesByDayChart