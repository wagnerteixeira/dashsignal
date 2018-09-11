import React, { Component } from 'react';
import CitiesList from './components/citiesList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './components/dashSignal.css';

import * as dashSignalServices from './services/dashSignalService';
import Rodape from './components/rodape';
import SignalInativo from './components/signalInativo'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: false, error: '', fail: false, intervalId: 0, todosClientes: [], inativosPagam: [], inativos: [], semResposta: [], falhasGuardian: [], ultimaAtualizacao: '', signalAtivo : true }
    this.getData = this.getData.bind(this)    
  }

  getData() {    
    const date = new Date();
    const currentDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
    const ultimaAtualizacao = ("0" + (date.getDate())).slice(-2) + "/" +  ("0" + ((date.getMonth()+1))).slice(-2) + "/" + date.getFullYear() + " " +   ("0" + (date.getHours())).slice(-2) + ':' + ("0" + (date.getMinutes())).slice(-2);
    
    this.setState({ ...this.state, fail: false, loading: false });
    dashSignalServices.doVerificaSignalAtivo()
      .then((res) => {
        if (!res.data)
          this.setState({...this.state, signalAtivo : false})
      })

    dashSignalServices.doGetFalhasGuardian(currentDate)
      .then((res) => this.setState({...this.state, falhasGuardian : res.data}))
      .catch((e) => {
        console.log(e)
        this.setState({ ...this.state, loading: false, fail: true, error: e.message });
      });

    dashSignalServices.doGetFalhasRetorno(currentDate)
      .then((res) => this.setState({...this.state, semResposta : res.data}))
      .catch((e) => {
        console.log(e)
        this.setState({ ...this.state, loading: false, fail: true, error: e.message });
      });

    dashSignalServices.doGetNaoConectadosGeral()
      .then((res) => this.setState({...this.state, inativos : res.data, ultimaAtualizacao : ultimaAtualizacao}))
      .catch((e) => {
        console.log(e)
        this.setState({ ...this.state, loading: false, fail: true, error: e.message });
      });

    dashSignalServices.doGetNaoConectadosPagos()
      .then((res) => this.setState({...this.state, inativosPagam : res.data}))
      .catch((e) => {
        console.log(e)
        this.setState({ ...this.state, loading: false, fail: true, error: e.message });
      });

    /*this.dashSignal.getData()
      .then((res) => {
        this.setState({ ...res, loading: false, fail: false });
      }).catch((e) => {
        console.log(e)
        this.setState({ ...this.state, loading: false, fail: true, error: e.message });
      });
    */
  }

  componentWillMount() {
    this.getData();
    var intervalId = setInterval(this.getData, 60000);
    this.setState({ ...this.state, intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }   

  render() {
    return (
      <MuiThemeProvider>
        <div>                    
          {this.state.signalAtivo && !this.state.fail && 
            <div className='root'>
              <div className='tableCities'>
                <CitiesList list={this.state.inativosPagam} textheader='Não Conectados SignalR (Pagos)' />
              </div>
              <div className='tableCities'>
                <CitiesList className='tableCities' list={this.state.semResposta} textheader='Falhas em Retorno' />
              </div>
              <div className='tableCities'>
                <CitiesList className='tableCities' list={this.state.inativos} textheader='Não Conectados SignalR (Geral)' />
              </div>
              <div className='tableCities'>
                <CitiesList className='tableCities' list={this.state.falhasGuardian} textheader='Falhas no Guardian' />
              </div>               
            </div>}

          {this.state.fail && <h2>Erro ao buscar informações, verifique se há conexão de internet e o servidor está ativo. <br /> {this.state.error}</h2>}

          {!this.state.signalAtivo && <SignalInativo />}

          {this.state.signalAtivo && !this.state.fail && <Rodape ultimaAtualizacao={this.state.ultimaAtualizacao} />}
        </div>

      </MuiThemeProvider>

    );
  }
}

export default App;
