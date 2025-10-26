
import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"

import TodoItems from "./components/TodoItems";
import { TodoItemsProvider } from "./store/TodoItemsContext";


function App() {



  return (
<TodoItemsProvider>
 <center>
<AppName />


 <AddTodo addTodoItem/> 
<TodoItems todoItems />


</center>
</TodoItemsProvider>
    )
}

export default App

 