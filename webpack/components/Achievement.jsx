import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Achievement extends React.Component {
 	constructor(props) {
      super(props);
      this.state = { open: false }
    }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
  	return (
      <div>
        <Dialog
          open={this.state.ModalOpen}
        >
          Good Job
        </Dialog>
      </div>
    );
  }
}

export default Achievement;
