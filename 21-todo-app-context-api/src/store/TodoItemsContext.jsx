import { createContext,useState } from "react";
import InitialTodoItems from "./InitialTodoItems";
export const todoItemsContext = createContext();
export const TodoItemsProvider = ({children}) => {
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
return<TodoItemsContext.Provider value = {{todoitems,addTodoItem,deleteTodoItem}}>
  {children}
</TodoItemsContext.Provider>
}