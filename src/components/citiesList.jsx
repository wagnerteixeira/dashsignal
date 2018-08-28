import React, { Component } from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

class DashSignaList extends Component {    
    renderList(){        
        let i = 0;
        return this.props.list.map(obj => {
            i = i+1;
            return (
            <TableRow className='row_class' key={i}>
                <TableRowColumn className='row_class'>{obj.Nome}</TableRowColumn>
                <TableRowColumn className='row_class'>{obj.Cidade}</TableRowColumn>
                <TableRowColumn className='row_class'>{obj.Uf}</TableRowColumn>
            </TableRow>)
        });
    };

    table(){
        let body = []
        if (this.props.list.length > 0) {
            body = this.renderList();
        }        
        return (<Table >
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow className='header_class'>
                    <TableHeaderColumn className='header_class' colSpan="3" style={{textAlign: 'center'}}>
                        {this.props.textheader}
                    </TableHeaderColumn>
                </TableRow>
                <TableRow className='header_class'>
                    <TableHeaderColumn className='header_class'>Cartório</TableHeaderColumn>
                    <TableHeaderColumn className='header_class'>Cidade</TableHeaderColumn>
                    <TableHeaderColumn className='header_class'>Estado</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {body}
            </TableBody>            
        </Table>)
    }
    
    render() {            
       let t = this.table();
        return(            
            <div>
                {t}
            </div>
        )
    }
}

export default DashSignaList