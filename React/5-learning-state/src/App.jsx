
import { useState } from 'react';
import './App.css'
import List from './components/List'

function App() {
  const [studentArr, setstudentArr] = useState(["Nirmala", "Aman", "Akash", "Amanullah", "Abhijeet", "Gopi"]);
console.log("Came to paint App component");
  console.log("State Value is:", studentArr)



const onchangeHandler = (event) => {
  if(event.key =="Enter") {
    console.log(event.target.value);
   
   
    const newArr = [event.target.value,...studentArr]
     event.target.value = '';
    setstudentArr(newArr);
    console.log(newArr);
  }

}
  return (
    <>
<h1 className='text-5xl'>Learners of MERN Stack</h1>
<List list = {studentArr} />
<input type = "text" placeholder='New Student Name' onKeyDown={onchangeHandler} />
    </>
  )
}

export default App
