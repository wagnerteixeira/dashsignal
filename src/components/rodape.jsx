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
        return (<Table >
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow className='header_class'>
                        <TableHeaderColumn className='header_class' colSpan="3" style={{ textAlign: 'center' }}>
                            <h1>RODAPÉ</h1>
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
            </Table>
        )
    }
}

export default Rodape;