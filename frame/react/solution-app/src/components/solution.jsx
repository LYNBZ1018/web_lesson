import React, { Component } from 'react';

class Solution extends Component {
    state = { 
        solutions: [
            {number: 1, title: "开心的金明1", views: 106,},
            {number: 2, title: "开心的金明2", views: 100,},
            {number: 3, title: "开心的金明3", views: 104,},
            {number: 4, title: "开心的金明4", views: 108,},
            {number: 5, title: "开心的金明5", views: 104,},
            {number: 6, title: "开心的金明6", views: 103,},
            {number: 7, title: "开心的金明7", views: 102,},
            {number: 8, title: "开心的金明8", views: 101,},
        ]
     };

    handleDelete = (s) => {
        const solutions = this.state.solutions.filter(solution => solution !== s);
        this.setState({
            solutions
        })
    }

    render() { 
        if (this.state.solutions.length === 0) {
            return (
                <p>没有题解了！</p>
            );
        }

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>标题</th>
                        <th>阅读</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.solutions.map(solution => (
                        <tr key={solution.number}>
                            <td>{solution.number}</td>
                            <td>{solution.title}</td>
                            <td>{solution.views}</td>
                            <td><button onClick={() => this.handleDelete(solution)} className='btn btn-danger'>删除</button></td>
                        </tr>   
                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default Solution;