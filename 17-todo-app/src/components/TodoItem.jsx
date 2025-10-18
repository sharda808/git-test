import Button from "./Button"
const TodoItem = ({id,todoText,todoDate,deleteTodoItem}) => {
  const deleteHandler = (event) => {
    console.log(event);
console.log(`Trying to delete ${id} ${todoText}`);
  }
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