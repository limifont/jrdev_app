import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
              background: '#08C9CC'
            }}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ExcercisePopup;
