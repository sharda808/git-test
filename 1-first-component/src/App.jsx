
import './App.css'
import Heading from './component/Heading'
import Paragraph from './component/Paragraph'
import Button from './component/Button'
import DynamicComponent from './component/DynamicComponent'
import Hello from './component/Hello'
import StudentList from './component/StudentList'
import RandomNumber from './component/RandomNumber'
import Title from './component/Title'
function App() {
const students = ['Aditi','Sharda','Anshika','shyam','Saurabh']
const newStudents = ['Ram','shyam','Mohan','Sohan','seeta','geeta']

  return (
    <>
    <Title titleText ="Hello World"/>
       <Title titleText ="KGCoding" />
          <Title titleText ="Subscribe" />
          <Title titleText ="Leaning props" />
<Button type ='success' btnText = "Click Me"/>
<Button type ='Danger' btnText = "Delete"/>
<Button  btnText = "Send"/>
 <Heading /> 
 <RandomNumber />
<RandomNumber />
 <RandomNumber />
 <RandomNumber />
    <StudentList  students = {students}/>
<Paragraph />

<DynamicComponent />
<Hello />
<StudentList students = {newStudents} />

 </>
  )
}

export default App
