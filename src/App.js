import './App.css';
import React, {Component} from 'react';
import TodoForm from "./Components/TodoForm"
import Todo from "./Components/Todo";

class App extends Component{

  state ={
    todos:[]
  }
//1.
//in this func we want to add new todos to our state
//we never want to mutate the state so we will avoid using .push method
//Pass this func as a prop to the form
  addTodo=(todo)=>{
    // console.log(todo);
    this.setState({
      todos: [todo, ...this.state.todos] // here we are making copy of the arr
    })
  }

  //2.Cross off todos when it is completed
  completedTodo=(eachTodo)=>{
    
    let crossOffTodos = this.state.todos.map(todo =>{
      if(todo.id === eachTodo.id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }else{
        return todo
      }
    })

    this.setState({
      todos: crossOffTodos
    })
  }


  render(){
     console.log(this.state.todos);
    let displayTodos = this.state.todos.map(todo=> <Todo 
      key={todo.id} 
      todo={todo} 
      completedTodo={this.completedTodo}/>)
  return (
    <div className="App">
      <TodoForm addTodo={this.addTodo}/>
      {displayTodos}
    </div>
  );
  }
}

export default App;
