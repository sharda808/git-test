// All store in RAM
import { useState } from "react";
import List from "./component/List"

function App() {
    console.log("painting App component");
 const [studentArr,setstudentArr] = useState(["Nirmala","Aman","sharda","Akash",'Gopi','Anshika']);
;
 console.log("State Value is:", studentArr);
  // const studentArr = [];


  console.log(studentArr);

  const onChangeHandler = (event) => {
    if (event.key === "Enter"){
    console.log(event.target.value);

const newArr = ([event.target.value , ...studentArr]);
event.target.value = '';
setstudentArr(newArr);
console.log(newArr);
    }
  }
  //  let studentArr;
  return (
    <>
<h1 className="text-5xl">Learners of MERN stack</h1>
<List list = {studentArr}/>
<input  type="text" placeholder="New student Name" onKeyDown={onChangeHandler} />
</>
   
  )
}

export default App
