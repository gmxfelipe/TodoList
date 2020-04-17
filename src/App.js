import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'
import About from './components/pages/About';
import uuid, { v4 as uuidv4 } from 'uuid';

import './App.css';
class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Tirar o lixo',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Jantar com esposa',
        completed: true
      },
      {
        id: uuidv4(),
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

  // Adicionando um todo na lista
  addTodo = (title) => { 
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    } 

    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render(){
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Header />
        <Route axact path="/" render={props => (
        <React.Fragment>
             <AddTodo addTodo={this.addTodo} />
             <Todos 
             todos={this.state.todos} 
             markComplete={this.markComplete} 
             delTodo={this.delTodo} 
             />
        </React.Fragment>
        )} />
         <Route path="/about" component={About} /> 
      </div>
    </div>
    </Router>
  )
}
}

export default App;
