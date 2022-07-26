import React, { Component } from 'react';
import { connect } from 'react-redux';

class String extends Component {
    state = {  } 

    handleClick = () => {
        this.props.concat('L');
    }

    render() { 
        return (
            <React.Fragment>
                <h3>String:{this.props.string}</h3>
                <button onClick={this.handleClick}>添加</button>
            </React.Fragment>
        );
    }
}
 
const mapStateToProps = (state, props) => {
    return {
        string: state.string,  // state.number是reducer 中的 number: f1
    }
}

const mapDispatchToProps = {
    concat: (c) => {
        return {
            type: "concat",
            character: c,
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(String);