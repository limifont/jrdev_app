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
					<div className="card-content">
						<h4>Exercises Completed by Day</h4>
						<AreaChart 
						interpolate='cardinal'
						axes
						height={200}
						width={500}
						xType={'text'}
						yTicks={3}
						areaColors={['#130069']}
						data={[this.props.data]}/>
					</div>
				</div>
			)
		} else  {
			return(<div></div>)
		}
	}
}

export default ExercisesByDayChart