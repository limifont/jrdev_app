import React from 'react';
import { AreaChart } from 'react-easy-chart';
import ToolTip from './ToolTip';

class ExercisesByDayChart extends React.Component {
	constructor(props) {
		super(props)
		this.state = { completed_by_day: [] }
	}

	componentWillMount() {
		$.ajax({
			url: `/api/show_stats/${this.props.jrdev.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( completed_by_day => {
			completed_by_day.unshift({x: '', y: 0})
			this.setState({ completed_by_day })
		}).fail( data => {
			console.log("Failed to get completions by day", data)
		})
	}

	render() {
		if(this.state.completed_by_day.length > 1) {
			return(
				<AreaChart 
				interpolate='cardinal'
				axes
				height={300}
				width={500}
				xType={'text'}
				yTicks={3}
				areaColors={['#130069']}
				data={[this.state.completed_by_day]}/>
			)
		} else {
			return(<h6>Chart Loading</h6>)
		}
	}
}

export default ExercisesByDayChart