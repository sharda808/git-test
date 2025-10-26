
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"

import TodoItems from "./components/TodoItems";
import TestForm from "./components/TestForm";
import { useState } from "react";
import initialTodoItems from "./data/IntialTodoItems";

function App() {


  const [todoItems,setTodoItems] = useState(initialTodoItems);
console.log(todoItems);
const addTodoItem = (todoText,todoDate) => {
setTodoItems(currentItems => {
  return [...currentItems,{id: todoText,todoText: todoText, todoDate:todoDate}]
})
}
const deleteTodoItem = (todoId) => {
  
}
  return (
    <>
 <center>
<AppName />

<AddTodo addTodoItem = {addTodoItem}/>
<TodoItems todoItems={todoItems} /> 


</center>
    </> 
  )
}

export default App
