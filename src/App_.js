import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Table from './components/citiesList_old'
import './components/dashSignal.css'


class App extends Component {  

    render(){
        return(
            <MuiThemeProvider> 
                <Table textheader='Teste' list={[]} />
            </MuiThemeProvider>
        )
    }

}

export default App;