import React, { Component } from 'react';
import Box from './box';

const Boxes = (props) => {
    return (
        <React.Fragment>
            <button onClick={() => props.onReset()} className='btn btn-info m-2'>Reset</button>
           {props.boxes.map(box => (
               <Box 
                key={box.id}
                box={box}
                onLeft={() => props.onClickLeft(box)}
                onRight={() => props.onClickRight(box)}
                onDouble={() => props.onDouble(box)}
                onDelete={props.onDelete}
               > 
                    <h1>Box</h1>
                    <p>#{box.id}</p>
               </Box>
           ))}
        </React.Fragment>
    );
}
 
export default Boxes;