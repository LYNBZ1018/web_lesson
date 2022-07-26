import React, { Component } from 'react';
import Number from './number';
import String from './string';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <String />
                <hr />
                <Number />
            </React.Fragment>
        );
    }
}
 
export default App;