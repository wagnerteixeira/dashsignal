import React, { Component } from 'react';
import {
    Table,
    TableHeader,
    TableHeaderColumn,
    TableRow,
} from 'material-ui/Table';

class Rodape extends Component {
    render() {
        return (
            <Table style={{width : 'calc(100% - 9px)', margin: '0 auto'}}>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow className='super_footer_class'>
                        <TableHeaderColumn className='super_footer_class' colSpan="3" style={{ textAlign: 'left', padding: '0px', backgroundColor: '#444444', color: 'white' }}>
                            &nbsp; Última atualização em:  {this.props.ultimaAtualizacao}
                        </TableHeaderColumn>
                        <TableHeaderColumn className='super_footer_class' colSpan="3" style={{ textAlign: 'right', paddingRight: '5px', backgroundColor: '#444444', color: 'white' }}>
                            Copyright Cartsys Software 2018 © - cartsys.com.br‎
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
            </Table >
        )
    }
}

export default Rodape;