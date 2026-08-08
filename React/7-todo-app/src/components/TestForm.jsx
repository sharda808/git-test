import React from 'react'

const TestForm = () => {
const submitHandler = (event) => {
console.log(event);
event.preventDefault();
}
const obj = {
  "firstName":"Sharda",
  "lastName": "jha",
"dob":"07/09/2026"
}
  return (
    <div>
<form action= "/submit-data" onSubmit={submitHandler}>
<input type = "text" placeholder='First Name'
name = "firstName"
 />
<br/>
<input type = "text" placeholder='last Name'
name='lastName'
/>
<br/>
<label htmlFor='dob'>DOB</label>
<input id = "dob"  type="date" name="dob"/><br/>
<input  type = "submit" />
</form>

    </div>
  )
}

export default TestForm