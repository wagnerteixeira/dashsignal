import React, { Component } from 'react';
import CitiesList from './components/citiesList'
//import Table from './components/table'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <CitiesList />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
