import React, { Component } from 'react'

import axios from 'axios'

import DashSignal from '../services/dashSgnalService';



class Get extends Component { 
    constructor(props){
        super(props)
        this.state = { list : []}
    } 
    
    componentWillMount(){
        var d = new DashSignal()

        d.getData().then((res)=> {
            //console.log(res)
        });
    }

    async get() {
        const g = axios('https://localhost:44367/api/sampledata/weatherforecasts?startdateindex=1');
        const [res] = await Promise.all([g]);
        //console.log(res.data);

        const t = axios.get('http://cri.cartsys.com.br/monitor/api/conexao/selecionarativos', {
            auth: {
                username: '3C83483BC1171E8E96C12219DDE7EC634B551DCB',
                password: '287EFA6EFC66C98E9F937EAB3377A45409AEB8A5'
            }
        });

        const [res2] = await Promise.all([t]);
       // console.log(res2.data);
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
        const { list } = this.state;
        let body = []
        if (list.length > 0) {
            body = JSON.stringify(list);
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



<div className='footer'>
                                        {this.props.list.length > 0 &&
                                        <div style={{width: '20%'}}>
                                            <AlertWarning color={yellow500} />
                                        </div> }
                                        <div style={{width: '80%'}}>
                                            Qtde Registros - {this.props.list.length}
                                        </div>
                                    </div>