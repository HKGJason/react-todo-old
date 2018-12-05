import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todos extends Component {
  render() {
    const {todos} = this.props
    /*
    this.props.dispatch({
      type: "MAP_TODOS"
      payload: 

    })
*/
    return (
      <div>
        {todos.map((todo, i) => <li key={i}>{todo.content}</li>)}
      </div>
    )
  }
}

export default connect()(Todos)