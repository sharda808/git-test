const TodoItemsReducer = (currentItems, action) => {
  switch(action.type) {
    case 'ADD_ITEM':{
      
      const id = action.payload.id;
      const Text = action.payload.Text;
const Date = action.payload.Date;
  
 return [
  ...currentItems,
     {id:id, 
      todoText:Text, 
      todoDate:Date}
    ]
      }
case 'DELETE_ITEM' :
return currentItems.filter(item => item.id != action.payload.todoId);

case 'LOAD_ALL_ITEMS' :
  return action.payload.allItems
  default:
    return currentItems;
  }

}
export default TodoItemsReducer;