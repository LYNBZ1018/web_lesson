import React, { Component } from 'react';
import { connect } from 'react-redux';

class Number extends Component {
    state = {  }; 

    handleClickAdd = () => {
        this.props.add(10);
    }

    handleClickSub = () => {
        this.props.sub(5);
    }

    render() { 
        return (
            <React.Fragment>
                <h3>Number: {this.props.number}</h3>    
                <button onClick={this.handleClickAdd}>add</button>
                <button onClick={this.handleClickSub}>sub</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        number: state.number,  // state.number是reducer 中的 number: f1
    }
}

const mapDispatchToProps = {
    add: (x) => {
        return {
            type: "add",
            value: x,
        }
    },

    sub: (x) => {
        return {
            type: "sub",
            value: x,
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Number);