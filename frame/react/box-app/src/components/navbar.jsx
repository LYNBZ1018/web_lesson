import React, { Component, createFactory } from 'react';

const Navbar = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Navbar
                        Boxes Count:{props.boxesCount}
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
}
 
export default Navbar;