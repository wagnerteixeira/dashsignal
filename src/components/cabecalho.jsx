import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

class Cabecalho extends Component {
    render() {
        return (
            <Table >
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow className='header_class super_header_class'>

                        <TableHeaderColumn className='header_class super_header_class' colSpan="3" style={{ textAlign: 'center', padding: '0px', backgroundColor: '#084B8A', color: 'white' }}>
                            DASHBOARD SIGNAL - CARTSYS SOFTWARE
                        </TableHeaderColumn>

                    </TableRow>
                </TableHeader>
            </Table >
        )
    }
}

export default Cabecalho;