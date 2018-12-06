import React, { Component } from 'react'
import TodoInput from './TodoInput'
import Todos from './Todos'
import { connect } from 'react-redux';
import TodoInputContainer from '../container/TodoInputContainer';
import TodoContainer from '../container/TodoContainer';

class TodoList extends Component {
  state = {todos: []};
  onUpdateFilter = (e) => {
    this.props.dispatch({
      type: "FILTER_COMPLETED",
      payload: !this.props.isOnlyActive
    })
  }
  render() {
    return (
      <div>
        <TodoInputContainer/>
        <TodoContainer/>
      <label>
                <span>Filter Completed</span><input type ="checkbox" checked = {this.props.isOnlyActive} onChange = {this.onUpdateFilter}/>
      </label>
      </div>
    )
  }
}
const mapStateToProps = state =>({
  todos: state.todos 
})

export default connect(mapStateToProps)(TodoList)