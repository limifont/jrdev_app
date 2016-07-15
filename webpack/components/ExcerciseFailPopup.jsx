import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ExcerciseFailPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
    $('.console').empty("");
  };


  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Snackbar
            open={this.state.open}
            message="Incorrect, Try again!"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
            bodyStyle={{
              background: '#FF6C55'
            }}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default ExcerciseFailPopup;
