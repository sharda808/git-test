
import './App.css'

import DynamicContent from './Component/DynamicContent'
import DynamicHello from './Component/DynamicHello'
import Heading from './Component/Heading'

import Paragraph from './Component/Paragraph'
import RandomNumber from './Component/RandomNumber'
import Student from './Component/Student'
import Button from './Component/Button'
import Title from'./Component/Title'
function App() {
const students =['Ridoy','Alok','Surya','urpreet','sharda'];
const newStudents = ['Ram','shyam','Mohan','Sohan','Geeta','Seeta'];
  const clickMeHandler = () => {
      console.log('click me');
      
    };
    const deleteHandler = () => {
      console.log('do not click');
    }
    const sendMeHandler = () => {
      console.log('save button');
    }
  return (
    <>
    <Student />
<Button  type="success" btnText="click Me" handler={clickMeHandler}/>
<Button type="danger" btnText ="Delete"  handler={deleteHandler}/>
<Button btnText  = "save " handler={sendMeHandler}/>

<Heading />
<Paragraph />
<DynamicContent />
<DynamicHello />
<Student  students = {students}/>
<RandomNumber />

<Title titleText="Hello world"/>

<Title  titleText ="KG coding"/>
<Title titleText="Subscribe"/>
<Student students = {newStudents} />

<button type="button" class="btn btn-primary mx-3">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link ">Link</button>
    </>
  )
}

export default App
