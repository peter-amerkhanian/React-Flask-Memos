import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
// import uuid from "uuid";
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:5000/')
    .then(res => this.setState({ todos: res.data }))
  }

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`http://127.0.0.1:5000/?id=${id}`)
    .then(res => 
      this.setState({ todos: res.data }));
  };

  // Add Todo
  addTodo = (title) => {
    axios.post('http://127.0.0.1:5000/',
    {
      title: title,
      completed: false
    }).then(res => 
      this.setState({ todos: res.data }));
  };

  render() {
    return (
      <Router>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo 
                  addTodo={this.addTodo} 
                  />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
