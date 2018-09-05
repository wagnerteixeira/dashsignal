import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class Cabecalho extends Component {
    render() {
        return (<Table >
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow className='header_class_pequeno'>
                    <TableHeaderColumn className='header_class_pequeno' colSpan="3" style={{ textAlign: 'center', backgroundColor: '#2E64FE', color: 'white'  }}>                    
                        <h1>DASHBOARD SIGNAL - CARTSYS SOFTWARE</h1>
                    </TableHeaderColumn>
                </TableRow>
            </TableHeader>
        </Table>)
    }
}

export default Cabecalho;