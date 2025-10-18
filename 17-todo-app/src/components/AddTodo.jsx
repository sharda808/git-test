import { useRef } from "react";
import Button from "./Button";
const AddTodo = ({addTodoItem}) => {
  const todoTextInput = useRef();
  const todoDateInput = useRef();
  const addHandler = () => {
const todoText = todoTextInput.current.value;
const todoDate = todoDateInput.current.value;
    todoTextInput.current.value = '';
    todoDateInput.current.value = '';
      addTodoItem(todoText,todoDate);
      
   
  }


  return (
        <div className="container">
  <div className="row kg_row">


    <div className="col-5">  <input type="text" className="form-control" placeholder="Enter Todo Here"
 ref = {todoTextInput}
    ></input></div>
    <div className="col-3">   
       <input type="date"  ref = {todoDateInput} className="form-control" ></input></div>
 <div className="col-2">  
  <Button type='success' btnText ='Add'  handler={addHandler}/>
</div>
  </div>
</div>
  )
}

export default AddTodo;