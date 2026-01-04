
import './App.css'
import {useState} from "react";
import List from "./components/List"

function App() {

  const[studentArr,setStudentArr] = useState(["Nirmala","Aman","sharda","Akash",'Gopi']);
  console.log("painting App component")
  console.log("State value is:",studentArr);


  const onChangeHandler = (event) =>{
    if(event.key ==="Enter"){
    console.log(event.target.value);

   const newArr = [event.target.value, ...studentArr];
   event.target.value = '';
   setStudentArr(newArr)
console.log(newArr);

    }
  }


  

  //  let studentArr;
  return (
    <>
<h1 className="text-5xl">Learners of MERN stack</h1>
<List list = {studentArr}/>
<input type="text" placeholder="New student here" onKeyDown = {onChangeHandler}/>
</>
   

  )
}

export default App;
