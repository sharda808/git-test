const todoItems = [
  { id:1, todoText:"Buy Milk", todoDate: "4-sept-2024"},

  { id:2,todoText:"Go to College", todoDate:"Weekday"},
    { id:3,todoText:"Exercise", todoDate:"Everyday"},
];

console.log("_____________Starting using Map___________");
const todoItemsText = todoItems.map
  (todoItem=>  todoItem.todoDate);

  


console.log(todoItemsText);
console.log("_________Ending________");
// function ConvertObjectToTodoText(todoItem){
//   console.log(`convert function was called with item ${JSON.stringify(todoItem)},converting this to ${todoItem.todoText}`);
//   return todoItem.todoText;
// }
// todoItems.forEach(item => {
//   const str = ConvertObjectToTodoText(item);
//   todoItemsText.push(str);


// console.log(todoItemsText);
// console.log("_________Ending________");
// const todoItemsText = [];
// todoItems.forEach(item => {
//   const str = ConvertObjectToTodoText(item);
//   todoItemsText.push(str);

// })
// console.log(todoItemsText);
// console.log("_________Ending________");