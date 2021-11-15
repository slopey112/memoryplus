import React, { Component } from 'react';
import Cell from './cell';

const gridStyles = {
    gridTemplateColumns: "repeat(20, minmax(0, 1fr))",
    gridTemplateRows: "repeat(25, minmax(0, 1fr))",
    width: "40rem"
}

export default class Grid extends Component {
    render () {
        let arr = [];
        for (let i = 0; i < 500; i++) {
            arr.push(<Cell />)
        }
        return (
            <div style={gridStyles} className="grid gap-1">
                {arr}
            </div>
        )
    }
}
