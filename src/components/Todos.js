import React, { Component } from 'react'

export default class Todos extends Component {


  
  componentWillMount(){
    fetch("http://localhost:8080/api/todos/search/statusOfTodos?status=completed,active", {
      method: 'GET',
      mode: 'cors'})
      .then(res => res.json())
      .then(res => this.props.onStart(res._embedded.todos));
  }

  render() {
    let todos = this.props.todos
    return (
      <div>
      {todos.filter((todo)=>{

          if (this.props.checked && (todo.status === "completed"))
          {
              return false
          }
          return true
        }).map((todo, i) => {
          if(todo.status ==="completed"){
            return <li onClick={() => this.props.handleClick(todo)} style={{ textDecorationLine: 'line-through' }} key={i}>{todo.content}</li>
          }
          else
            return <li onClick={() => this.props.handleClick(todo)} key={i}>{todo.content}</li>
        })}
      </div>
    )
  }
}

