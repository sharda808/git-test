
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"

import TodoItems from "./components/TodoItems";

import StateVsRef from "./components/StateVsRef";
import TestForm from "./components/TestForm";
import { useState } from "react";

import InitialTodoItems from "./data/InitialTodoItems";
function App() {


const [todoItems,setTodoItems] = useState(InitialTodoItems);
console.log(todoItems);
const addTodoItem = (todoText,todoDate) => {
setTodoItems(currentItems => {
  return [...currentItems,{id:todoText,todoText,todoDate
  }]
})
}
const deleteTodoItem = (todoId) => {

  setTodoItems(currentItems => {
    return currentItems.filter(item => item.id != todoId);
  })
}
  return (

 <center>
<AppName />
{/* <TestForm /> */}

 <AddTodo addTodoItem = {addTodoItem}/> 
<TodoItems todoItems = {todoItems} deleteTodoItem = {deleteTodoItem}/>
{/* <StateVsRef /> */}

</center>
    )
}

export default App

 