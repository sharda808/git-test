

import './App.css'

import DynamicComponent from './components/DynamicComponent'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import RandomNumber from './components/RandomNumber'
import StudentList from './components/StudentList'
import Title from './components/Title'
import Button from './components/Button'
function App() {
   const students = ['Ridoy', 'Nafees', 'Alok','Neeraj','Ashish','Gurpreet','Yousuf'];
 const newstudents = ['Ram', 'Shyam', 'Mohan','Sohan', 'Seeta', 'Geeta'];
 const clickMeHandler = () => {
  console.log('clickMeHandler cliked');
};
 const deleteHandler = () => {
  console.log('deleteHandler cliked');
};
 const sendHandler = () => {
  console.log('sendHandler cliked');
};
  return (
    <>
    <Title  titleText = "Hello World"/>
     <Title  titleText = "KGCoding" />
      <Title  titleText = "Subscribe" />
      <Title  titleText = "Learning props" />
   <Heading />
 <RandomNumber />
  <RandomNumber />
   <RandomNumber />
    <RandomNumber />
     <StudentList students = {students} />
   <Paragraph />
   <Button type = 'success'  btnText = 'Click Me' handler = {clickMeHandler} />
  <Button type = 'danger'  btnText = 'Delete' handler = {deleteHandler} />
   <Button  btnText = 'Send' handler = {sendHandler} />
  <DynamicComponent />
  <StudentList students = {newstudents} />
    </>
  )
}

export default App
