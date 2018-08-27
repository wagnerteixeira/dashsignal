import React, { Component } from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import Subheader from 'material-ui/';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class DashSignaList extends Component {    
    renderList(){        
        let i = 0;
        return this.props.list.map(obj => {
            i = i+1;
            return (
            <TableRow className='row_class' key={i}>
                <Card>

                </Card>
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
                    <Card>
                        Teste
                        <CardHeader  title='Without Avatar' />
                        <CardText expandable={false}>
                            Teste
                        </CardText>
                    </Card>
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