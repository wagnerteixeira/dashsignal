import React, { Component } from 'react'
import { 
         Table, 
         TableBody, 
         TableHeader, 
         TableHeaderColumn, 
         TableRow, 
         TableRowColumn, 
    } from 'material-ui/Table';

import { withStyles } from 'material-ui/styles';
import { Paper, 
         Typography, 
         Grid, 
         Card, 
         CardHeader, 
         CardContent, 
         Avatar, 
         List, 
         ListItem, 
         ListItemText, 
         IconButton 
    } from 'material-ui';

const styles = () => ({
    root: {
       padding: "50px 100px",
       zIndex: 999,
       position: "absolute"
     },
    
    card: {
       display: "flex",
       height: "calc(100vh - 100px)"
     },
    
     rightBorder: {
       borderRight: "solid #d0D0D0 1px"
     },
    
     content: {
       marginTop: 0
     },
    
    background: {
       position: "absolute",
       height: 200,
       width: "100%",
       top: 0,
       background: "#7159C1"
     },
    
     rightContainer: {
       background:
         "url(https://hdwallsource.com/img/2014/8/my-neighbor-totoro-wallpaper-27981-28703-hd-wallpapers.jpg) center center",
       flex: 1
     },
    
    heightAdjust: {
       display: "flex",
       flexDirection: "column"
     },
    
     paper: {
       background: "#9de1fe",
       padding: 20
     },
    
     information: {
       color: "#444"
     }
   });

  
class DashSignaList extends Component {
    renderList() {
        let i = 0;
        
        return this.props.list.map(obj => {
            i = i + 1;
            return (
                
                <TableRow className='row_class' key={i}>
                    <Card>                    
                        <TableRow className='row_class'>                        
                            <TableRowColumn className='row_class' style={{ textAlign: 'left' }}>{obj.Nome}</TableRowColumn>                        
                            
                        </TableRow>
                        <TableRow className='row_class'>
                            <TableRowColumn className='row_class' style={{ textAlign: 'left' }}>{obj.Cidade}  - {obj.Uf}</TableRowColumn>
                            {/*<TableRowColumn className='row_class'>Estado: {obj.Uf}</TableRowColumn>*/}
                        </TableRow>    
                    </Card>
                </TableRow>)
                
                
        });
    };

    
    table() {
        let body = []
        if (this.props.list.length > 0) {
            body = this.renderList();
        }

        return(
            <div>
                <Card>
                    <Table>
                        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                            <TableRow className='header_class'>
                                <TableHeaderColumn className='header_class' colSpan="3" style={{ textAlign: 'center', backgroundColor: "#d0D0D0" }}>
                                    {this.props.textheader}
                                </TableHeaderColumn>
                            </TableRow>   
                            <TableRow className='header_class'>
                                <TableHeaderColumn className='header_class' colSpan="3" style={{ textAlign: 'left' }}>
                                    Cartório <br />
                                    Cidade - Estado
                                </TableHeaderColumn>
                            </TableRow>              
                        </TableHeader>                    
                        <TableBody displayRowCheckbox={false}>
                            {body}
                        </TableBody> 
                    </Table>
                </Card>
            </div>
        )
        /*
        return (<Table >
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow className='header_class'>
                    <TableHeaderColumn className='header_class' colSpan="3" style={{ textAlign: 'center' }}>
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
        */
    }

    render() {
        let t = this.table();
        return (
            <div>
                {t}
            </div>
        )
    }
}

export default DashSignaList