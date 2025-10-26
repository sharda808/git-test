import TodoItem from "./TodoItem"
const TodoItems = ({todoItems}) => {
 


return (
  <>
  {todoItems.map((item) =>(
    <TodoItem key = {item.id}  id ={item.id}todoText={item.todoText} todoDate = {item.todoDate}/>
))}
</>
);
};
export default  TodoItems;