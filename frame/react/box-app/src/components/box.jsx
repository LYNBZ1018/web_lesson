import React, { Component } from 'react';

class Box extends Component {
    render() { 
        return (
            <React.Fragment>
                {this.props.children}
                <h1 style={this.getStyles()}>{this.props.box.x}</h1>
                <button onClick={this.props.onLeft} className='btn btn-primary m-2'>Left</button>
                <button onClick={this.props.onRight} className='btn btn-success m-2'>Right</button>
                <button onClick={this.props.onDouble} className='btn btn-danger m-2'>Double</button>
                <button onClick={() => this.props.onDelete(this.props.box.id)} className='btn btn-danger m-2'>Delete</button>
            </React.Fragment>
        );
    }

    getStyles() {
        let outer = this;
        let style = {
            width: "250px",
            height: "50px",
            marginTop: "10px",
            marginLeft: outer.props.box.x * 4 + 8,
            marginBottom: "0px",
            backgroundColor: "lightblue",
    
            color: "red",
            textAlign: "center",
        }
        return style;
    }


}
 
export default Box;