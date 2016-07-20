import React from 'react';
import {PieChart} from 'react-easy-chart';
import ToolTip from './ToolTip';


class ClassesStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classrooms: [], jrdevs: [], data: [], showToolTip: false, max: 0, top: "", left: "" }
    this.organizeData = this.organizeData.bind(this);
    this.rGB = this.rGB.bind(this);
    this.maxClassCapacity = this.maxClassCapacity.bind(this);
    
  }

  componentWillMount() {
    $.ajax({
      url: `/api/classrooms`,
      type: 'GET',
      dataType: 'JSON'
    }).done( classrooms => {
      this.setState({ classrooms })
    }).fail( data => {
      console.log("failed to retrieve data", data)
    })

    $.ajax({
      url: `/api/user_classrooms/${this.props.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( jrdevs => {
      this.setState({ jrdevs })
      this.maxClassCapacity();
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
    return data;
  }

  rGB(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  maxClassCapacity() {
    let max = this.state.jrdevs[0]
    this.state.jrdevs.map( jrdev => {
      if(jrdev > max) {
        max = jrdev
      }
    })
    this.setState({ max })
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
    if(this.state.classrooms.length > 0) {
      if(this.state.classrooms.length === 1) {
        if(this.state.jrdevs.length === 1 && this.state.jrdevs[0] === 0) {  
          return(
            <div className="card-content center">
              <span>ADD A STUDENT!</span>
              <div>
                <h5 className="center">Your classroom currently has zero students.</h5>
              </div>
            </div>
          )
        } else {
          <div className="card-content center">
            <div>You have more than one class</div>
            <span>STUDENTS PER CLASSROOM</span>
            <PieChart 
              size={this.props.size}
              data={this.organizeData()} 
              innerHoleSize={200}
              mouseOverHandler={this.mouseOverHandler.bind(this)}
              mouseOutHandler={this.mouseOutHandler.bind(this)}
              mouseMoveHandler={this.mouseMoveHandler.bind(this)}
              padding={10}
              styles={this.styles}
            />
            {this.state.showToolTip ? <ToolTip top={this.state.top} left={this.state.left}>{this.state.key} has {this.state.value} students</ToolTip> : null}
          </div>
        }
      } else {
        if(this.state.max > 0) {
          return(
            <div className="card-content center">
              <span>STUDENTS PER CLASSROOM</span>
              <PieChart 
                size={this.props.size}
                data={this.organizeData()} 
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
        } else {
          return(
            <div className="card-content center">
              <span>ADD A STUDENT!</span>
              <div>
                <h5 className="center">Your classrooms currently have zero students.</h5>
              </div>
            </div>
          )
        }
      }
    } else {
      return(
        <div className="card-content center">
          <span>ADD A CLASSROOM!</span>
          <div>
            <h5 className="center">Once you add some classrooms and students, you'll see some nifty stats here!</h5>
          </div>
        </div>
      )
    }
  }
}

export default ClassesStats;
