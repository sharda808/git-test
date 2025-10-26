import { useContext } from "react";
import { todoItemsContext } from "../store/TodoItemsContext";
import Button from "./Button"
const TodoItem = ({id,todoText,todoDate}) => {
const{deleteTodoItem} = useContext(todoItemsContext);
  return (
            <div className="container">
  <div className="row kg_row">


    <div className="col-5 text-truncate">{todoText}</div>
  <div className="col-3 ">
{todoDate}
  </div>

 <div className="col-2">
<Button type='danger' btnText = 'Delete' handler={() =>deleteTodoItem(id)} />
  </div>
</div>
</div>
  )
}
export default TodoItem;