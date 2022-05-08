import React, {useState} from "react";
import './App.css';
//importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";


function App() {
  const [inputText, setInputText] = useState("");  //inputText is a value and setInputText is a function that allows to change the value
  const [todos, setTodos] = useState([]); // array because gonna have array of objects in here
  
  return (
    <div className="App">
      <header>
<h1> ToDo List </h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <ToDoList todos={todos}/>
    </div>
  );
}

export default App;
