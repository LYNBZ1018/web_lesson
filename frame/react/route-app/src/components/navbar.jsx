import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Techonolgy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="navbar-brand" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="navbar-brand" to="/linux">Linux</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="navbar-brand" to="/django">Django</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="navbar-brand" to="/web">Web</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default Navbar;