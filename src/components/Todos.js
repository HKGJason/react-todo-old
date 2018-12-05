import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todos extends Component {
  render() {
    const {todos} = this.props
    return (
      <div>
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </div>
    )
  }
}

export default connect()(Todos)