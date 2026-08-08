import React, { useRef } from 'react'

const TestForm = () => {
const firstName = useRef();
const lastName = useRef();
const dob = useRef();

const submitHandler = (event) => {
console.log(firstName.current.value);
console.log(lastName.current.value);
console.log(dob.current.value);
event.preventDefault();
}

// const obj = {
//   "firstName":"Sharda",
//   "lastName": "jha",
// "dob":"07/09/2026"
// }
  return (
    <div>
<form action= "/submit-data" onSubmit={submitHandler}>
<input type = "text" ref={firstName} placeholder='First Name'
name = "firstName"
 />
<br/>
<input type = "text" ref={lastName} placeholder='last Name'
name='lastName'
/>
<br/>
<label htmlFor='dob'>DOB</label>
<input id = "dob"  type="date" ref={dob} name="dob"/><br/>
<input  type = "submit" />
</form>

    </div>
  )
}

export default TestForm