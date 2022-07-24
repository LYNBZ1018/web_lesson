import React, { Component } from 'react';
import Navbar from './navbar';
import Boxes from './boxes';

class App extends Component {
    state = { 
        boxes : [
            {id: 1, x: 0, db: 1},
            {id: 2, x: 0, db: 1},
            {id: 3, x: 0, db: 1},
            {id: 4, x: 0, db: 1},
        ]
     } 
    
    handleClickLeft = (box) => {
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].x = boxes[k].x - boxes[k].db;
        this.setState({
            boxes: boxes,
        })
    }

    handleClickRight = (box) => {
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].x = boxes[k].x + boxes[k].db;
        this.setState({
            boxes: boxes,
        })
    }

    handleDuble = (box) => {
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].db *= 2;
        this.setState({
            boxes: boxes,
        })
    }

    handleDelete = (boxId) => {
        const boxes = this.state.boxes.filter(b => b.id !== boxId);
        this.setState(
            {boxes: boxes},
        )
    }

    handleReset = () => {
        const boxes = this.state.boxes.map(b => {
            return {
                id: b.id,
                x: 0,
                db: 1,
            }
        });
        this.setState({boxes: boxes});
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar boxesCount={this.state.boxes.filter(b => b.x !== 0).length} />
                <div className="container">
                    <Boxes
                        boxes={this.state.boxes}
                        onClickLeft={this.handleClickLeft}
                        onClickRight={this.handleClickRight}
                        onDelete={this.handleDelete}
                        onDouble={this.handleDuble}
                        onReset={this.handleReset}
                    >

                    </Boxes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;