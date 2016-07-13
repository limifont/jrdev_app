import React from 'react';
import {PieChart} from 'react-easy-chart';
import ToolTip from './ToolTip';


class ClassesStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classrooms: [], jrdevs: null, data: [], showToolTip: false }
    this.organizeData = this.organizeData.bind(this);
    this.rGB = this.rGB.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: `/api/classrooms`,
      type: 'GET',
      dataType: 'JSON'
    }).done( classrooms => {
      console.log(classrooms)
      this.setState({ classrooms })
      this.organizeData()
    }).fail( data => {
      console.log("failed to retrieve data", data)
    })

    $.ajax({
      url: `/api/user_classrooms/${this.props.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( jrdevs => {
      this.setState({ jrdevs })
      console.log(jrdevs);
    }).fail( data => {
      console.log("failed to get jrdevs for classroom", data)
    })
  }

  organizeData() {
    let data = []
    this.state.classrooms.map( classroom => {
      let r = this.rGB(150, 255);
      let g = this.rGB(0, 255);
      let b = this.rGB(140, 255);
      let col = "rgb(" + r + "," + g + "," + b + ")";
      let classData = { key: classroom.name, value: 0, color: col }
      data.push(classData);
    })

    let i = 0
    this.state.jrdevs.map( jrdev => {
      data[i]["value"] = jrdev;
      i += 1;
    })
    console.log(data)
    this.setState({ data })
    console.log(this.state.data)
  }

  rGB(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  mouseOverHandler(d, e) {
   this.setState({
     showToolTip: true,
     top: e.y,
     left: e.x,
     value: d.value,
     key: d.data.key});
  }

  mouseMoveHandler(e) {
   if (this.state.showToolTip) {
     this.setState({top: e.y, left: e.x});
   }
  }

  mouseOutHandler() {
   this.setState({showToolTip: false});
  }

  render() {
    if (this.state.data.length < 1){
      return(
        <div className="card">
          Loading
        </div>
      )
    } else {
      return(
        <div>
          <PieChart 
            size={200}
            data={this.state.data} 
            // innerHoleSize={200}
            mouseOverHandler={this.mouseOverHandler.bind(this)}
            mouseOutHandler={this.mouseOutHandler.bind(this)}
            mouseMoveHandler={this.mouseMoveHandler.bind(this)}
            padding={10}
            styles={this.styles}
          />
          {this.state.showToolTip ? <ToolTip top={this.state.top} left={this.state.left}>{this.state.key} has {this.state.value} students</ToolTip> : null}
       </div>
      )
    }
  }
}

export default ClassesStats;
