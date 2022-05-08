import React from "react";

//importing
const Form = ({ setInputText,todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitToDoHandler = (e) => {
 e.preventDefault(); //stops from refreshing the page after submitting
    setTodos([
        ...todos, 
        {text: inputText, completed: false, id: Math.random() * 1000}
    ]);
    setInputText(""); //sets state back to 0 aka resets whenever we add something to the list
  };
  return (
    <form>
      <input value={inputText}
      onChange={inputTextHandler}
       type="text" 
       className="todo-input" />

      <button onClick={submitToDoHandler}
       className="todo-button" 
       type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
