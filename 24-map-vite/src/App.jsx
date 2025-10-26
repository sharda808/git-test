
import './App.css'
import List from './components/List'

function App() {
const studentArr = ["Nirmala","Aman","vikram","shyam","vikash"]
console.log("came to paint App component");
const onChangeHandler = (event) => {
  if(event.key === "Enter"){
    console.log(event.target.value);
    console.log(studentArr);
  }
}

return (
    <>
<h1 className="text-5xl">Learner of MERN stack</h1>
<List list = {studentArr}/>
<input type="text" placeholder='New student Name' onChange={onChangeHandler} />

    </>
  )
}

export default App
