import React, { Component } from 'react'
import axios from 'axios'
import City from './city'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class DashSignaList extends Component {
    constructor(props){
        super(props)
        
        this.state = { list : []}
    } 
    
    componentWillMount(){
        this.getList()
    }

    getList(){
        axios.get(`http://computadorcasa.ddns.net:8081/apisignal/dashboard`, {
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
        let i =0;
        return this.state.list.map(obj => {
            i = i+1;
            return (
            <TableRow key={i}>
                <TableRowColumn>{obj.cartorio}</TableRowColumn>
                <TableRowColumn>{obj.cidade}</TableRowColumn>
                <TableRowColumn>{obj.estado}</TableRowColumn>
            </TableRow>)
        });
    };
    
    render() {
        const { list } = this.state;
        let body = []
        if (list.length > 0) {
            body = this.renderList();
        }
          
        return(
        <Table >
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
                <TableHeaderColumn>Cartório</TableHeaderColumn>
                <TableHeaderColumn>Cidade</TableHeaderColumn>
                <TableHeaderColumn>Estado</TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {body}
            </TableBody>
            
        </Table>)
    }
}

export default DashSignaList