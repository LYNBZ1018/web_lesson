import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class WebContent extends Component {
    state = {  } 
    render() { 
        console.log(this.props.prams);
        return (
            <React.Fragment>
                <h1>Web - {this.props.params.chapter}</h1>
                <div>
                    content
                </div>
            </React.Fragment>
        );
    }
}
 
export default (props) => (
    <WebContent 
        {...props}
        params={useParams()}
     />
)