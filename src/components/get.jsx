import React, { Component } from 'react'
import signalService  from '../services/dashSgnalService'

import axios from 'axios'



class Get extends Component { 
    constructor(props){
        super(props)
        this.state = {existem : [], inativosPagam : [], inativos : [], semResposta : [], falhasGuardian : []}
        //this.state = {list : []}
         
    } 
    
    componentWillMount(){
        //this.getList()
        //console.log("signal service");
        const state = signalService(this);     
       // console.log(state)     
      //  console.log(this.state)  
         
    }

    getList(){
        axios.get('http://cri.cartsys.com.br/monitor/api/conexao/selecionarativos', {
            auth: {
                username: '3C83483BC1171E8E96C12219DDE7EC634B551DCB',
                password: '287EFA6EFC66C98E9F937EAB3377A45409AEB8A5'
            }
        }).then((res) => {            
            this.setState({ list : res.data || [] });
        }).catch((e) => {
            console.log(e)
            this.setState({ list : [] });
        });
    }   

    render() {
        const { existem } = this.state;
        console.log("this.state")
        console.log(this.state)
        let body = []
        if (existem.length > 0) {
            body = JSON.stringify(existem);
        }
          
        return (
            <div>
                <h2>Teste</h2>
                {body}
            </div>
        )
    }
}

export default Get