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

    render() { 
        return ( 
            <div>
                <input
                    name="text"
                    placeholder="todo.."
                    value={this.state.text}
                    onChange={this.handleChange}
                />
            </div>
         );
    }
}
 
export default TodoForm;