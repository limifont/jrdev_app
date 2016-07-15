import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ExcercisePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };


  render() {
    return (
      <MuiThemeProvider>
        <div >
          <Snackbar
            open={this.state.open}
            message="You got it correct!"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
            bodyStyle={{
              background: '#00e5ff' 
            }}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ExcercisePopup;
