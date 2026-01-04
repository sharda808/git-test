import { useContext } from "react";
import TodoItem from "./TodoItem"
import { todoItemsContext } from "../store/TodoItemsContext";
const TodoItems = ({}) => {
 const{todoItems} = useContext(todoItemsContext);

return (
  <>
  {todoItems.map((item) =>(
    <TodoItem key = {item.id}  id ={item.id}todoText={item.todoText} todoDate = {item.todoDate}/>

))}
</>
);
};
export default  TodoItems;