const StudentList = (props) => {
  // const students = ['Ridoy', 'Nafees', 'Alok','Neeraj','Ashish','Gurpreet','Yousuf'];
  if(!props.students) {
    return <p> No students</p>
  }
  return (
    <ol>
{
  props.students.map((student, index) => <li key = {student}>{student}</li>)
}
    </ol>
  )
}
export default StudentList;