import { useRef, useState } from "react";

const TestForm = () => {
  console.log("Painting form");
  const [firstNameval,setFirstName] = useState();
  const clicks = useRef(0);
  const firstName = useRef();
    const lastName = useRef();
      const dob = useRef();
      const firstNameChangeHandler = (event) => {
        
setFirstName(event.target.value);
      }
  console.log(firstName.current)
  const submitHandler = (event) => {

event.preventDefault();
console.log("Button Cliked");
// console.log(firstName.current.value);
// console.log(lastName.current.value);
// console.log(dob.current.value);
  }
// const handleOnChange = (event) =>{
//   firstName.current = event.target.value;
//   console.log(firstName.current);
// }
  // const obj = {
  //   "firstName":"sharda",
  //   "lastname":"jha",
  //   "dob":"03/10/2025",
  // }
return(
<div>
  <h1>StateValue:{firstNameval} RefValue:{clicks.current}
    times</h1>
<form  action = "./submit-date" onSubmit ={submitHandler}>
  <input type="text" ref ={firstName} placeholder="First Name"
  name="firstName" onKeyDown={firstNameChangeHandler}/><br />
<input type ="text" ref ={lastName} placeholder="last Name" 
name="lastname"/><br/>
<label htmlFor ="dob">DOB</label>
<input id="dob" ref ={dob} type="date" name="dob" /><br/>
<input type="submit" onClick={()=>{clicks.current += 1}} />
</form>
</div>
);
};
export default TestForm;
// use State
// 1.re-render
// 2.save-data
// Ref:
// React returns an object with a current property
