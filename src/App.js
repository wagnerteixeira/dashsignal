import React, { Component } from 'react';
import CitiesList from './components/citiesList'
//import Table from './components/table'
import Get from './components/get'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import 'semantic-ui-css/semantic.min.css';
import './components/dashSignal.css'



/*
 *<MuiThemeProvider>
          <CitiesList />
        </MuiThemeProvider>



         <div className='root'>
        <MuiThemeProvider>
          <div className='tableCities'>
            <CitiesList list={list} textheader='Grid 1'/>
          </div>        
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div className='tableCities'>
            <CitiesList list={list} textheader='Grid 2'/>
          </div>        
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div className='tableCities'>
            <CitiesList list={list} textheader='Grid 3'/>
          </div>        
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div className='tableCities'>
            <CitiesList list={list} textheader='Grid 4'/>
          </div>        
        </MuiThemeProvider>
      </div>
  */ 

  const list =[{
    cartorio : 'Cartorio 1',
    cidade: 'Cidade 1',
    estado: 'MG',    
  }, {
    cartorio : 'Cartorio 1',
    cidade: 'Cidade 1',
    estado: 'MG',
  }]





class App extends Component {  
  render() {    
    return (    
      <Get />
    );
  }
}

export default App;
