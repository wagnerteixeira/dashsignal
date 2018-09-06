import React, { Component } from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    TableFooter
} from 'material-ui/Table';

import {
    Card,    
    CardText
} from 'material-ui/Card';

import {red500} from 'material-ui/styles/colors';
import AlertWarning from  'material-ui/svg-icons/alert/warning'

class DashSignaList extends Component {
    constructor(props) {
        super(props);
        this.state = {height: '500px'};
    }

    handleResize = () => this.setState({
        height: window.innerHeight + 'px',
    });
    
    componentWillMount(){        
        this.setState({height: window.innerHeight + 'px'});
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    renderList() {
        let i = 0;        
        

        return this.props.list.map(obj => {
            i = i + 1;
            return (
                <TableRow className='row_class' key={i}>
                    <Card className='noPadding'>
                        <CardText className='cardRowClass'>
                            <span style={{fontWeight: 500}}>{obj.Nome}</span> <br />
                            <span>{obj.Cidade} - {obj.Uf}</span>
                        </CardText>

                    </Card>
                </TableRow>)


        });
    };

    render() {
        let body = []
        if (this.props.list.length > 0) {
            body = this.renderList();
        }

        return (
            <div>
                <Card>
                    <Table height={`calc(${this.state.height} - 85px - 38px - 30px)`}>
                        <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
                            <TableRow className='header_class'>

                                <TableHeaderColumn className='header_class super_header_class' colSpan='3' style={{ textAlign: 'center', backgroundColor: '#444444', color: 'white' }}>
                                    {this.props.textheader}
                                </TableHeaderColumn>

                            </TableRow>

                            <TableHeaderColumn className='header_class' colSpan='3' style={{ textAlign: 'left', backgroundColor: '#767676', color: 'white' }}>                            
                                <span style={{fontWeight: 500, fontSize: '1.2em'}}>Cartório</span> <br />
                                <span style={{fontSize: '1.2em'}}>Cidade - Estado</span>
                            </TableHeaderColumn>
                        </TableHeader>

                        <TableBody displayRowCheckbox={false}>
                            {body}
                        </TableBody>

                        <TableFooter adjustForCheckbox={false} displaySelectAll={false} style={{borderBottom: '1px solid white'}}>
                            <TableRow className='footer_class'>
                                <TableRowColumn  className='footer_class' colSpan='2' style={{ textAlign: 'left', backgroundColor: '#444444', padding:'0px', color: 'white'}}>                                    
                        {this.props.list.length > 0 &&<AlertWarning style={{ width: 34, height: 34,}} color={red500} />}  
                                </TableRowColumn>
                                <TableRowColumn  className='footer_class'  style={{ textAlign: 'right', backgroundColor: '#444444', color: 'white', paddingBottom : '4px', paddingRight: '0px' }}>                                    
                                     {this.props.list.length} &nbsp; 
                                </TableRowColumn >
                            </TableRow>                            
                        </TableFooter>
                    </Table>
    
                </Card>
            </div>
        )        
    }
}

export default DashSignaList