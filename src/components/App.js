import React, { Component } from 'react';
import TodoList from './TodoList.js'
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <TodoList/>
      </div>
    );
  }
}

const mapStateToProps = state => ({


});




export default connect(mapStateToProps)(App);

