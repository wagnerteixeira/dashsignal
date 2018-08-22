import React, { Component } from 'react'
import axios from 'axios'
import City from './city'

class CitiesList extends Component {
    constructor(props){
        super(props)
        this.state = { list : []}
    } 
    
    componentWillMount(){
        this.getList()
    }

    getList(){
        axios.get('http://computadorcasa.ddns.net:8081/apisignal/dashboard', {
            auth: {
                username: '1234567890',
                password: '0987654321'
            }
        }).then((res) => {            
            this.setState({ list : res.data || [] });
        }).catch((e) => {
            console.log(e)
            this.setState({ list : [] });
        });
    }

    renderList(){
        return this.state.list.map(obj => (
            <City registry={obj.cartorio} city={obj.cidade} state={obj.estado} />));
    };
    
    render() {
        const { list } = this.state;
        return list.length ? 
        (  
            <div>
                <div>
                    <div>Cartório</div>
                    <div>Cidade</div>
                    <div>Estado</div>
                </div>
                <div>
                    {this.renderList()}
                </div>
            </div>
        ) : 
        (            
            <h2>Loading...</h2>
        )
    }
}

export default CitiesList