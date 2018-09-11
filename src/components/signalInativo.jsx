import React, { Component } from 'react'

import {red600 as red} from 'material-ui/styles/colors';
import AlertWarning from  'material-ui/svg-icons/alert/warning'

import './signalInativo.css'

class SignalInativo extends Component {
    render(){
        return (
            <div className='clearfix'>
                <div className='box-left'>
                    <AlertWarning style={{width: '100%', height: '100%'}} color={red} />
                </div>
                <div className='box-right'>
                    <div style={{textAlign : 'center', fontSize:'40px', fontWeight: 700 }}>
                    <p>ATENÇÃO!!</p>

                    <p>Servidor do SignalR sem conexão com internet! <br />
                    Todos os clientes fora do servidor da Amazon.</p>
                    
                    <p>Tais questões exigem avaliações e correções imediatas.</p></div>
                </div>
            </div>
        )
    }
}

export default SignalInativo;