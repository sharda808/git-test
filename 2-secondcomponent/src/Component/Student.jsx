const Student = (props) =>{

if(!props.students){
  return <p>NO students</p>
}
return <ol>
{
props.students.map((student,index) => <li key={student}>{student}</li>)
}

</ol>;
}

export default Student;