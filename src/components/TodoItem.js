import React, { Component } from 'react'

export default class TodoItem extends Component {
    handleButtonDelete = () => {
        this.props.deleteTodo(this.props.item);
    }
    render() {
        return (
            <div className=''>
                <span>
                    {this.props.idx + 1}-{this.props.item.tenCongViec}
                </span>
                <button className='TodoItem-button'>Edit</button>
                <button className='TodoItem-button' onClick={() => this.handleButtonDelete()} >Delete</button>
            </div>
        )
    }
}