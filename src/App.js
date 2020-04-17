import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'

import './App.css';
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Tirar o lixo',
        completed: false
      },
      {
        id: 2,
        title: 'Jantar com esposa',
        completed: true
      },
      {
        id: 3,
        title: 'Encontro com o chefe',
        completed: false
      }
    ]
  }

  // Risca todo ao clicar na caixinha do começo da lista.
  markComplete= (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Deleta todo da lista da por Id 
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id  )] });
  }


  render(){
  return (
    <div className="App">
      <div className="container">
      <Header />
      <AddTodo />
      <Todos 
      todos={this.state.todos} 
      markComplete={this.markComplete} 
      delTodo={this.delTodo} 
      />
      </div>
    </div>
  )
}
}

export default App;
