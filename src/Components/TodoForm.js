import React, { Component } from 'react';
import shortid from 'shortid'
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
        this.props.addTodo({
            text: this.state.text,
            completed: false,
            id: shortid.generate()
        
        })
        this.setState({
            text: ""
        })
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
                <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
         );
    }
}
 
export default TodoForm;