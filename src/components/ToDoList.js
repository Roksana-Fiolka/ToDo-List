import React from 'react';
import ToDo from "./ToDo";


const ToDoList = ({ todos, setTodos }) => {
  console.log(todos)
return (
    <div className="todo-container">
    <ul className="todo-list">
    {todos.map(todo => (

<ToDo
setTodos={setTodos}
todos={todos}
todo={todo}
 key ={todo.id}
 text={todo.text}/>


    ))}

    </ul>
  </div>

);
};

export default ToDoList;