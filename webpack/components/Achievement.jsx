import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Achievement extends React.Component {
 	constructor(props) {
      super(props);
      this.state = { open: true };
      this.handleClose = this.handleClose.bind(this);
      // this.handleOpen = this.handleOpen.bind(this);

    }

  // handleOpen = () => {
  //   this.setState({open: true});
  // };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const standardActions = [
      <FlatButton
        label="X"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

  	return (
      <MuiThemeProvider>
        <div>
          <Dialog
            ref="dialog"
            open={this.state.open}
            title="Congratulations!"
            actions={standardActions}
            onRequestClose={this.handleClose}
          >
            Good Job
          </Dialog>
          <p>Test</p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Achievement;
