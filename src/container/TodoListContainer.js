
import { connect } from 'react-redux';
import TodoList from '../components/TodoList.js'

const mapStateToProps = state =>({
  isOnlyActive: state.isOnlyActive,
  todos: state.todos.filter(e => {
    return state.isOnlyActive ? 
      e.status === 'active' : true
    }
  ) 
})

export default connect(mapStateToProps)(TodoList)