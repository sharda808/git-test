import logo from './logo.svg';
import React from 'react';


import Paragraph from './paragraph';
import Button from './DangerButton';
import DynamicComponent from './components/DynamicComponent';
import StudentList from './components/StudentList';
import RandomNumber from './components/RandomNumber'
;
import Title from './components/Title'

function App() {
  
  const students = ['sharda','Anshika','Aditi','Nandini','Ditee']
const newStudents = ['Ram','Shyam','Sohan','Mohan','Seeta','Geeta']
  const clickMeHandler= () => {
    console.log('clickMeHandler clicked');
  };
    const deleteMeHandler= () => {
    console.log('deleteMeHandler clicked');
  };
    const sendHandler= () => {
    console.log('sendHander clicked');
    };
  return (
  <>
  <Title titleText ="Hello World" />
   <Title titleText ="KGCoding" />
    <Title  titleText ="Subscribe"/>
      <Title  titleText ="Learning Props"/>
      <Button type='Success' btnText ="Click Me" handler ={clickMeHandler} />  
        <Button type='Danger' btnText ="Delete"  handler={deleteMeHandler}/> 
  <Button btnText ="Send"  handler ={sendHandler}/> 
<RandomNumber/>

<RandomNumber/>
<StudentList students = {students}/>
<Paragraph/>


<DynamicComponent/>
<StudentList students = {newStudents} />

<button/>

   </>
  );
}

export default App;
