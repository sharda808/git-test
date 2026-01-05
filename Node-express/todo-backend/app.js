const express = require("express");
const cors = require("cors");
const todos = require("./todoItems");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.get("/todos", (req,res) => {
  res.json(todos);
});
app.get("/todos/:id",(req,res) => {
const todo = todos.find((todo) =>todo.id === parseInt(req.params.id));
if(!todo) return res.status(404).send("Todo not found");
res.json(todo);
});
app.post("/todos", (req,res) => {
  const newTodo ={
   id: todos.length ? todos[todos.length - 1].id + 1 : 1,

    task:req.body.task,
    completed:false,
    date:req.body.date || new Date().toISOString().split("T")[0],
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});
app.delete("/todos/:id", (req,res) => {
  const todoIndex = todos.findIndex(
    (todo) => todo.id === parseInt(req.params.id)
  );
  if(todoIndex === -1){
    return res.status(404).send("Todo not found");
  }
  const deleteTodo = 
  todos.splice(todoIndex, 1)[0];
  res.json(deleteTodo);
});
const PORT = 5000;
app.listen(PORT, () => {
console.log(`Server runnig at http://localhost:${PORT}/`);
});