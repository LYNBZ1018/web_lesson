import React, { Component } from 'react';
import Navbar from './navbar';
import Home from './home';
import Linux from './linux';
import Django from './django';
import Web from './web';

class App extends Component {
    state = {  } 

    render() { 
        return (
            <React.Fragment>
                <Navbar />
            </React.Fragment>
        );
    }
}
 
export default App;