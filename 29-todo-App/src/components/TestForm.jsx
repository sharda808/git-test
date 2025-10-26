import { useRef } from "react";

const TestForm  = () => {
console.log("painting Form");
const firstName = useRef();

const lastName = useRef();
const dob = useRef();

const submitHandler = (event) =>{

event.preventDefault();
console.log(firstName.current.value);
console.log(lastName.current.value);
console.log(dob.current.value);
}
// const obj = {
//   "firstName":"sharda",
//   "lastname":"jha",
//   "dob":"30/09/2025",
// }
// const handlerOnChange = (event) => {
//   firstName.current = event.target.value;
//   console.log(firstName.current);
// }
return (
  <div>

    <form action ="/submit_data" onSubmit = {submitHandler}>
      <input type="text" ref = {firstName} placeholder ="First Name"  name="firstName" /><br/>
      <input type="text"  ref = {lastName} placeholder = "Last Name" 
      name="lastName"/><br />
  <label htmlFor="dob">DOB</label>
  <input id="dob" ref={dob} type="date" /><br/>
  <input type="submit" />
    </form>
  </div>
)
}
export default TestForm;
// useState 
//  1 problem = "re-render" // enter new data
// 2 problem = "storing new data"
// 1.save data
//2.re-render