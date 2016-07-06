import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Achievement extends React.Component {
 	constructor(props) {
      super(props);
      this.state = { open: false };
      this.handleClose = this.handleClose.bind(this);
      this.handleOpen = this.handleOpen.bind(this);

    }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const standardActions = (
      <FlatButton
        label="X"
        primary={true}
        onTouchTap={this.handleClose}
      />
    );

  	return (
      <div>
        <Dialog
          open={this.state.open}
          title="Congratulations!"
          onRequestClose={this.handleClose}
        >
          Good Job
        </Dialog>
      </div>
    );
  }
}

export default Achievement;
