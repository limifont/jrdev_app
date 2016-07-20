import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';

class Achievement extends React.Component {
 	constructor(props) {
      super(props);
      this.state = { open: true };
      this.handleClose = this.handleClose.bind(this);
    }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const standardActions = [
      <button className='btn' onClick={this.handleClose} style={{marginRight: '10px'}}>Keep Coding</button>,
      <Link to='/' className='btn'>To Dashboard</Link>
    ];

  	return (
      <MuiThemeProvider>
        <div>
          <Dialog
            ref="dialog"
            open={this.state.open}
            title="Congratulations!"
            onRequestClose={this.handleClose}
            titleClassName="center"
            contentClassName="center"
            className="center"
          >
            You Completed This Lesson.
            <br/>
            <br/>
            <br/>
            {standardActions}
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Achievement;
