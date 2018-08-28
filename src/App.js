import React, { Component } from 'react';
import CitiesList from './components/citiesList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './components/dashSignal.css'

import DashSignal from './services/dashSgnalService';
import Alert from './components/alert'


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

class App extends Component {  
  
  constructor(props){
    super(props);
    this.state = {loading: true, intervalId : 0, todosClientes : [],  inativosPagam : [], inativos: [], semResposta: [], falhasGuardian: []}
    this.dashSignal = new DashSignal()
    this.getData = this.getData.bind(this)
  }

  getData(){
    this.setState({...this.state, loading : true});
    this.dashSignal.getData().then((res)=> {
      this.setState({...res, loading : false});
      console.log(this.state)
    });
  }

  componentWillMount(){
    this.getData();
    var intervalId = setInterval(this.getData, 10000);
    this.setState({...this.state, intervalId : intervalId});
  }

  componentWillUnmount(){
     //use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }

  /*

   <MuiThemeProvider>
        <Alert open={this.state.loading} />        
        <div className='root'>
            <CitiesList list={this.state.inativosPagam} textheader='Inativos que Pagam'/>
            <CitiesList list={this.state.semResposta} textheader='Sem resposta'/>
            <CitiesList list={this.state.inativos} textheader='Inativos'/>
            <CitiesList list={this.state.falhasGuardian} textheader='Falhas Guardim'/>        
        </div>
      </MuiThemeProvider>*/

  render() {    
    return (     
      <MuiThemeProvider> 
        <div>        
          <Alert open={this.state.loading} />         
          <div className='root'>
            <CitiesList list={this.state.inativosPagam} textheader='Inativos que Pagam'/>
            <CitiesList list={this.state.semResposta} textheader='Sem resposta'/>
            <CitiesList list={this.state.inativos} textheader='Inativos'/>
            <CitiesList list={this.state.falhasGuardian} textheader='Falhas Guardim'/> 
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
