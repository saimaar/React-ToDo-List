import './App.css';
import React, {Component} from 'react';
import TodoForm from "./Components/TodoForm"
import reactDom from 'react-dom';

class App extends Component{

  state ={
    todos:[]
  }

//in this func we want to add new todos to our state
//we never want to mutate the state so we will avoid using .push method
//Pass this func as a prop to the form
  addTodo=(todo)=>{
    // console.log(todo);
    this.setState({
      todos: [todo, ...this.state.todos] // here we are making copy of the arr
    })

  }

  render(){
    console.log(this.state.todos);
  return (
    <div className="App">
    <TodoForm addTodo={this.addTodo}/>
    </div>
  );
  }
}

export default App;
