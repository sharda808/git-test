import { useContext, useRef } from "react";
import Button from "./Button";
import { TodoItemsContext } from "../store/TodoItemsContext";
import { todoItemToClientModel } from "../utils/ModelUtil";

const AddTodo = () => {
   const todoTextInput = useRef();
   const todoDateInput = useRef();
 
const {addTodoItem} = useContext(TodoItemsContext)
  const addHandler = () => {
    const Text = todoTextInput.current.value;
    const Date = todoDateInput.current.value;
    todoTextInput.current.value = '';
     todoDateInput.current.value = '';
   fetch("http://localhost:3000/todos", {
    method: 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      task:Text,
      date:Date
    })
   }).then(res =>res.json())
   .then(serverItem => {
    const clientItem = todoItemToClientModel(serverItem);
    //  const {Text, Date} = todoItemToClientModel(serverItem);
    //  addTodoItem(Text, Date)
    // console.log(data);
 addTodoItem(clientItem.id, clientItem.Text,clientItem.Date);
   })
 
}
return (
  
   <div className="container">

  <div className="row kg_row">
    <div className="col-5"> <input type="text" className="form-control"
     placeholder="Enter Todo Here"
     ref={todoTextInput}
      />
    
    </div>
    <div className="col-3">
      <input type="date"
      ref={todoDateInput}
       className="form-control" />
      </div>
      <div className="col-2"> 
        <Button type= 'success' btnText = 'Add' handler={addHandler}/>
      </div>
  </div>
</div>
)
}
export default AddTodo;