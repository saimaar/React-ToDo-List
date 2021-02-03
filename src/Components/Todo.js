import React from 'react';

const Todo = (props) => {

    let handleCross=(e)=>{
        props.completedTodo(props.todo)
    }

    // console.log(props);
    return ( 
    <div>
        <h2 className={props.todo.completed ? "completed-todo": ""} onClick={handleCross}>{props.todo.text}</h2>  
    </div> 
    );
}
 
export default Todo;