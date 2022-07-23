import React, { Component } from 'react';

class Box extends Component {
    state = { 
        x: 0,
        db: 1,
     };

     handleClickLeft = (step) => {
        this.setState({
            x: this.state.x - step * this.state.db,
        })
     }

     handleClickRight = (step) => {
        this.setState({
            x: this.state.x + step * this.state.db,
        })
     }

     handleClickLeftTmp = () => {
         this.handleClickLeft(10);
     }

     handleClickRightTmp = () => {
         this.handleClickRight(10);
     }

     handleDuble = () => {
        this.setState({
            db: this.state.db * 2,
        })
     }

    render() { 
        return (
            <React.Fragment>
                <h1 style={this.getStyles()}>{this.state.x}</h1>
                <button onClick={this.handleClickLeftTmp} className='btn btn-primary m-2'>Left</button>
                <button onClick={this.handleClickRightTmp} className='btn btn-success m-2'>Right</button>
                <button onClick={this.handleDuble} className='btn btn-danger m-2'>Double</button>
            </React.Fragment>
        );
    }

    getStyles() {
        let outer = this;
        let style = {
            width: "250px",
            height: "50px",
            marginTop: "10px",
            marginLeft: outer.state.x * 4 + 8,
            marginBottom: "0px",
            backgroundColor: "lightblue",
    
            color: "red",
            textAlign: "center",
        }
        return style;
    }


}
 
export default Box;