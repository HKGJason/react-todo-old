import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: newTodo =>{
    dispatch({
    type: "ADD_TODO",
    payload: newTodo
    })
  }
})

export default connect(null, mapDispatchToProps)(TodoInput)