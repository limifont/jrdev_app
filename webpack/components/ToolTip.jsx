import React from 'react';
import { Style } from 'radium';
//Dependencies for the charts
const toolTipStyles = {
  '.tooltip': {
    border: 'solid silver 1px',
    position: 'fixed',
    backgroundColor: 'white',
    borderRadius: '4px',
    padding: '10px'
  }
};

class ToolTip extends React.Component {

  render() {
    return (<div className="tooltip-container">
      <Style scopeSelector=".tooltip-container" rules={toolTipStyles}/>
      <div className="tooltip" style={{'top': this.props.top, 'left': this.props.left}}>
        {this.props.children}
      </div>
    </div>);
  }
}

ToolTip.propTypes = {
  left: React.PropTypes.string,
  top: React.PropTypes.string
};

export default ToolTip;