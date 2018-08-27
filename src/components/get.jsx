import React, { Component } from 'react'

import axios from 'axios'



class Get extends Component { 
    constructor(props){
        super(props)
        this.state = { list : []}
    } 
    
    componentWillMount(){
        this.getList()
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