import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class Rodape extends Component {
    render() {
        return (
            <Table >
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow className='footer_class_pequeno'>
                        <TableHeaderColumn className='footer_class_pequeno' colSpan="3" style={{ textAlign: 'left', backgroundColor: '#444444', color: 'white' }}>
                            &nbsp; Última atualização em:  {this.props.ultimaAtualizacao}
                        </TableHeaderColumn>
                        <TableHeaderColumn className='footer_class' colSpan="3" style={{ textAlign: 'right', backgroundColor: '#444444', color: 'white' }}>
                            Copyright Cartsys Software 2018 © - cartsys.com.br‎
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
            </Table >
        )
    }
}

export default Rodape;