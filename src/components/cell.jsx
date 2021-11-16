import React, { Component } from 'react'

export default class Cell extends Component {
    constructor () {
        super();
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput (e) {
        this.props.handleInput(e.target.value, this.props.identifier);
    }

    render () {
        return (
            <div className={
                this.props.color === "default" ? 
                "h-7 w-7 bg-gray-300" : (
                    this.props.color === "red" ?
                    "h-7 w-7 bg-red-300" : 
                    "h-7 w-7 bg-green-300"
            )} >{
                this.props.editable ? 
                <input className="h-7 w-7 bg-gray-300 text-center" type="text" name="num" maxLength="1" onChange={this.handleInput} /> :
                this.props.num
            }</div>
        )
    }
}
