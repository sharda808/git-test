import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import Button from "./Button";

const LoadItems = () => {
  const {todoItems,addAllTodoItems} = useContext(TodoItemsContext);
  if(todoItems.length !== 0){
  return <></>;
}
const LoadItemsHandler = () => {
  fetch('https://dummyjson.com/todos')
.then(res => res.json())
.then(items => {
  const newItems = items.map(item =>
  ({
id:item.id,
todoText: item.task,
todoDate: item.date
  })
  );
    addAllTodoItems(newItems);
})
}
  return (
<>
<h2>Enjoy Your day</h2>
<Button btnText = 'Load Todos' handler = {LoadItemsHandler}>Load Todos</Button>

</>
  )
}
export default LoadItems;