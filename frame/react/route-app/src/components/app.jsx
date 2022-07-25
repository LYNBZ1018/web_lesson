import React, { Component } from 'react';
import Navbar from './navbar';
import Home from './home';
import Linux from './linux';
import Django from './django';
import Web from './web';
import WebContent from './webcontent';
import NotFound from './notfound';
import {Routes, Route,Navigate} from 'react-router-dom';

class App extends Component {
    state = {  } 

    render() { 
        return (
            <React.Fragment>
                <Navbar />
                <hr />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/linux" element={<Linux />}></Route>
                    <Route path="/django" element={<Django />}></Route>
                    <Route path="/web" element={<Web />}></Route>
                    <Route path="/web/content/:chapter/:section" element={<WebContent />}></Route>
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<Navigate replace to="/404" />} />
                </Routes>
            </div>
            </React.Fragment>
        );
    }
}
 
export default App;