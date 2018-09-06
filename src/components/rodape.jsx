import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import IconRefresh from 'material-ui/svg-icons/action/alarm-add';
import { red200, red500, blue800, blue500, blue700, blueGrey200, blue200 } from 'material-ui/styles/colors';

class Rodape extends Component {
    render() {
        return (
            <Table style={{ width: 'calc(100% - 9px)', margin: '0 auto' }} >
                <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
                    <TableRow className='super_footer_class' >

                        <TableHeaderColumn className='super_footer_class' colSpan="3" style={{ textAlign: 'left', padding: '0px', backgroundColor: '#084B8A', color: 'white' }}>
                            &nbsp; Última atualização: {this.props.ultimaAtualizacao}
                        </TableHeaderColumn>

                        <TableHeaderColumn className='super_footer_class' colSpan="3" style={{ textAlign: 'right', paddingRight: '5px', backgroundColor: '#084B8A', color: 'white' }}>                            
                            cartsys.com.br‎ - Copyright Cartsys Software 2018 ©
                        </TableHeaderColumn>

                    </TableRow>
                </TableHeader>
            </Table >
        )
    }
}

export default Rodape;