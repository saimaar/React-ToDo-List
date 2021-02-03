import React, { Component } from 'react';

class  TodoForm extends Component {
    state = { 
        text: ""
     }

     handleChange=(e)=>{
         //we can also do text: e.target.value
         // Below code makes it more dynamic
        this.setState({
            [e.target.name]: e.target.value
        })
     }

     handleSubmit=(e)=>{
        e.preventDefault()// adding this so that it does not refresh
        this.props.addTodo(this.state.text)
     }

    render() { 
        // console.log(this.props);
        return ( 
            <div>
              <form onSubmit={this.handleSubmit}>
                <input
                    name="text"
                    placeholder="todo.."
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                </form>
            </div>
         );
    }
}
 
export default TodoForm;