import { useState } from "react";
import { useRef } from "react";

const TestForm = () => {
  console.log("painting Form");
  const [firstNameVal,setFirstName] = useState();
  const clicks = useRef(0);
  const firstName = useRef();
  const lastName = useRef();
  const dob = useRef();

const submitHandler = (event) => {

event.preventDefault();
console.log("Button Clicked")
// console.log(firstName.current.value);
// console.log(lastName.current.value);
// console.log(dob.current.value);
}
const firstNameChangeHandler = (event) => {
setFirstName(event.target.value);
}
// const handleOnChange= (event) => {
//  firstName.current = event.target.value;
// console.log(firstName.current);
// }
// const obj = {
//   firstName:"sharda",
//   lastName:"jha",
//   "dob":"7-10-2025"
// }
  return (
<>
<h1>StateValue:{firstNameVal} RefValue: {clicks.current} times</h1>
<form action="/submit-data" onSubmit = {submitHandler}>
  <input type="text" ref = {firstName} placeholder="First Name" name ="firstName" onKeyDown={firstNameChangeHandler}></input><br/>
  <input type="text"  ref = {lastName}placeholder="LastName" name ="lastName"></input><br/>
  <label htmlFor ="">DOB</label>
  <input  id ="dob" ref = {dob} type="date" name="dob"/><br/>
  <input type="submit" onClick = {() => {clicks.current +=1}} />
</form>
</>
 
)
}
export default TestForm;
// Reference
