import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import Alert from './alert';

class Rodape extends Component {
    render() {
        return (
        <Table >
            
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow className='footer_class_pequeno'>
                    <TableHeaderColumn className='footer_class_pequeno' colSpan="3" style={{ textAlign: 'center', backgroundColor: '#2E64FE', color: 'white' }}>
                        <p>Copyright Cartsys Software 2018© - cartsys.com.br‎</p>
                    </TableHeaderColumn>
                </TableRow>
            </TableHeader>
        </Table>
        )
    }
}

export default Rodape;