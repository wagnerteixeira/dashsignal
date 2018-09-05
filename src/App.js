import React, { Component } from 'react';
import CitiesList from './components/citiesList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './components/dashSignal.css'


import DashSignal from './services/dashSignalService';
import Alert from './components/alert'
import Cabecalho from './components/cabecalho';
import Corpo from './components/corpo';
import Rodape from './components/rodape';

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

  constructor(props) {
    super(props);
    this.state = { loading: true, error: '', fail : false, intervalId: 0, todosClientes: [], inativosPagam: [], inativos: [], semResposta: [], falhasGuardian: [] }
    this.dashSignal = new DashSignal()
    this.getData = this.getData.bind(this)
  }

  getData() {
    this.setState({ ...this.state, loading: true });
    this.dashSignal.getData()
    .then((res) => {
      this.setState({...res, loading: false, fail: false});      
    }).catch((e) => {
      console.log(e)
      this.setState({ ...this.state, loading: false, fail: true, error : e.message });
  });
  }

  componentWillMount() {
    this.getData();
    var intervalId = setInterval(this.getData, 60000);
    this.setState({ ...this.state, intervalId: intervalId });
  }

  componentWillUnmount() {
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
          {this.state.fail ? (
            <h2>Erro ao buscar informações, verifique se há conexão de internet e o servidor está ativo. <br /> {this.state.error}</h2> ) 
            : 
            (<div className='root'>               
              <div className='tableCities'>
                <CitiesList list={this.state.inativosPagam} textheader='Clientes Não Conectados SignalR (Pagos)' />
              </div>
              <div className='tableCities'>
                <CitiesList className='tableCities' list={this.state.semResposta} textheader='Clientes com Falhas em Retorno' />
              </div>
              <div className='tableCities'>
                <CitiesList className='tableCities' list={this.state.inativos} textheader='Clientes Não Conectados SignalR (Geral)' />
              </div>
              <div className='tableCities'>
                <CitiesList className='tableCities' list={this.state.falhasGuardian} textheader='Clientes com Falhas no Guardian' />
              </div>
            </div>)}
        </div>
        
      </MuiThemeProvider>

    );
  }
}

export default App;
