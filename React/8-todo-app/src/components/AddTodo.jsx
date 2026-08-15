import { useRef } from "react";
import Button from "./Button";

const AddTodo = ({addTodoItem}) => {
   const todoTextInput = useRef();
   const todoDateInput = useRef();
  const addHandler = () => {
    const Text = todoTextInput.current.value;
    const Date = todoDateInput.current.value;
    todoTextInput.current.value = '';
     todoDateInput.current.value = '';
  addTodoItem(Text,Date);
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