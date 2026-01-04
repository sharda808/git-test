import { useState } from "react";
import List from "./components/List"


function App() {
const[studentArr,setstudentArr] = useState(["Nirmala","Aman","sharda","Akash","Gopi","ANshika"]);
// const studentArr = ["Nirmala","Aman","sharda","Akash","Gopi","Anshika"];
console.log(studentArr);
const onChangeHandler = (event) => {
if(event.key === 'Enter'){
  console.log(event.target.value);
  const newArr =([event.target.value,...studentArr]);
  event.target.value = '';
  setstudentArr(newArr);
  console.log(newArr);
}
}
  return (

    <>
    <h1 className="text-5xl">Learner of MERN stack</h1>
<List  list = {studentArr}/>
<input type="text" placeholder="New student Name"  onKeyDown = {onChangeHandler}/>
    </>
  )
}

export default App
