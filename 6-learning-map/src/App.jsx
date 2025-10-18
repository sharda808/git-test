import List from "./components/List"

function App() {
  // const studentArr = [];
  const studentArr = ["Nirmala","Aman","sharda","Akash",'Gopi','Anshika'];
  //  let studentArr;
  return (
    <>
<h1 className="text-5xl">Learners of MERN stack</h1>
<List list = {studentArr}/>

</>
   
  )
}

export default App
