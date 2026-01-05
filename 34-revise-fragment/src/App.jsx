import "bootstrap/dist/css/bootstrap.css";
import './App.css'
import Container from "./components/container";
import FoodInput from "./components/FoodInput";
import Item from "./components/Item";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import { useState } from "react";


function App() {
let [foodItems,setFoodItems] = useState([]);
const onKeyDown = (event) => {
  if(event.key === "Enter"){
    let newFoodItem = event.target.value;
    event.target.value = "";
    let newItems = [...foodItems,newFoodItem];
    setFoodItems(newItems);
  }
};

  return (
    <center>
    <Container>
   <h1 className='food-heading'>Healthy Food</h1>
 <FoodInput handleKeyDown={onKeyDown} />
 <ErrorMessage  items = {foodItems}/>
 <FoodItems items = {foodItems} />
<Item />
</Container>
</center>
  )
}

export default App
