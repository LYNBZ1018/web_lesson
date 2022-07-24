import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Item</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/linux">Linux</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/django">Django</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href='/web'>Web</a>
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