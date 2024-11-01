import {Component} from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component{
    render(){
        return(
            <div>
                {this.props.todoList.map((item,idx)=>{
                    return <TodoItem key={idx} idx={idx} item={item} deleteTodo={this.props.deleteTodo}/>
                })}
            </div>
        )
    }
}