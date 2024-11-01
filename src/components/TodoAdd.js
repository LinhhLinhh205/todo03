import { Component } from 'react'

export default class TodoAdd extends Component{
    state={
        noiDung:''
    }
    handleChangText=(e)=>{
        this.setState({noiDung:e.target.value})
    }
    handleButtonAdd=()=>{
        let todo={
            id:Math.floor(Math.random()*1000+1),
            tenCongViec:this.state.noiDung
        }
        this.props.addTodo(todo);
        this.setState({noiDung:''})
    }
    render(){
        return(
            <div>
                <input type='text' placeholder='Nhập công việc'  value={this.state.noiDung} onChange={(e)=>{this.handleChangText(e)}}/>
                <button className='TodoAdd-button' onClick={()=>{this.handleButtonAdd()}}>Add</button>
            </div>
        )
    }
}