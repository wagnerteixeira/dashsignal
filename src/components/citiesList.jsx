import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter } from 'material-ui/Table';
import { withStyles } from 'material-ui/styles';
import { Paper, Typography, Grid, Avatar, List, ListItem, ListItemText, IconButton } from 'material-ui';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { red500 } from 'material-ui/styles/colors';
import AlertWarning from 'material-ui/svg-icons/alert/warning';

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
    constructor(props) {
        super(props);
        this.state = { height: '500px' };
    }

    handleResize = () => this.setState({
        height: window.innerHeight + 'px',
    });

    componentWillMount() {
        this.setState({ height: window.innerHeight + 'px' });
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
                            <span style={{ fontWeight: 500 }}>{obj.Nome}</span> <br />
                            <span>{obj.Cidade} - {obj.Uf}</span>
                        </CardText>

                    </Card>
                </TableRow>
            )
        });
    };


    table() {
        let body = []
        if (this.props.list.length > 0) {
            body = this.renderList();
        }

        return (
            <div>
                <Card>
                    <Table height={`calc(${this.state.height} - 85px - 38px - 30px - 38px)`}>
                        <TableHeader adjustForCheckbox={false} displaySelectAll={false} >
                            <TableRow className='header_class'>

                                <TableHeaderColumn className='header_class super_header_class' colSpan='3' style={{ textAlign: 'center', backgroundColor: '#0174DF', color: 'white' }}>
                                    {this.props.textheader}
                                </TableHeaderColumn>

                            </TableRow>

                            <TableHeaderColumn className='header_class' colSpan='3' style={{ textAlign: 'left', backgroundColor: '#0080FF', color: 'white' }}>
                                <span style={{ fontWeight: 500, fontSize: '1.2em' }}>Cartório</span> <br />
                                <span style={{ fontSize: '1.2em' }}>Cidade - Estado</span>
                            </TableHeaderColumn>

                        </TableHeader>

                        <TableBody displayRowCheckbox={false}>
                            {body}
                        </TableBody>

                        <TableFooter adjustForCheckbox={false} displaySelectAll={false} style={{ borderBottom: '1px solid white' }}>
                            <TableRow className='footer_class'>
                                <TableRowColumn className='footer_class' colSpan='2' style={{ textAlign: 'left', backgroundColor: '#0174DF', padding: '0px', color: 'white' }}>
                                    &nbsp; {this.props.list.length > 0 && <AlertWarning style={{ width: 24, height: 24, color: 'red' }} />}
                                </TableRowColumn>
                                <TableRowColumn className='footer_class' style={{ textAlign: 'right', backgroundColor: '#0174DF', color: 'white', paddingBottom: '4px', paddingRight: '0px' }}>
                                    Total de Registros: {this.props.list.length} &nbsp;
                                </TableRowColumn >
                            </TableRow>
                        </TableFooter>
                    </Table>

                </Card>
            </div>
        )
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

export default DashSignaList;