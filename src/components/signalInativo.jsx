import React, { Component } from 'react'

import {red500} from 'material-ui/styles/colors';
import AlertWarning from  'material-ui/svg-icons/alert/warning'

class SignalInativo extends Component {
    render(){
        return (
            <div>
                <AlertWarning style={{ width: '300px', height: '300px', position: 'absolute', top: '3%', left: '3%'}} color={red500} />
                <div style={{textAlign : 'center', fontSize:'40px', fontWeight: 700 }}>
                <p>ATENÇÃO!!</p>

                <p>Servidor do SignalR sem conexão com internet! <br />
                Todos os clientes fora do servidor da Amazon.</p>
                
                <p>Tais questões exigem avaliações e correções imediatas.</p></div>
            </div>
        )
    }
}

export default SignalInativo;