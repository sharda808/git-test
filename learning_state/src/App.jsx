
import './App.css'

function App() {
  const studentArr = ["Nirmala","Aman","Akash","Amanullah","Abhijeet","Gopi"];
  const onChangeHandler = (event) => {
    if(event.key == "Enter") {
      console.log(event.target.value);
    }
 
  }
  return (
    <>
<h1>This is my final Project</h1>
<input type = "text" placeholder="New Student Name" onKeyDown={onChangeHandler} /> 
    </>
  )
}

export default App
