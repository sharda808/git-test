

import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import AppName from './components/AppName'

import TodoItems from './components/todoItems'
import intialTodoItems from './data/InitialTodoItems'

function App() {
 
const[todoItems,setTodoItems] = useState( intialTodoItems)
console.log(todoItems);
 const addTodoItem = (Text, Date) => {
  setTodoItems(currentItems => {
    return [...currentItems, {id:Text, todoText:Text, todoDate:Date}]
  })
 }
 const deleteTodoItem = (todoId) => {
  
  setTodoItems(currentItems => {
    return currentItems.filter(item => item.id != todoId);
  })
 }
  return (
    <>
   <center>
<AppName />
  <AddTodo  addTodoItem= {addTodoItem}/> 
  <TodoItems todoItems={todoItems} deleteTodoItem= {deleteTodoItem} />
    </center>
   


    </>
  )
}

export default App
