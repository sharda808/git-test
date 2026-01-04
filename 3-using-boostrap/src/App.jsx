


function App() {


  return (

    <>
 <h1>Student Details Form</h1>
<div class="container-sm ms-0">Full Name</div>
<div class="input-group mb-3 mt-2">

  <input type="text" class="form-control" placeholder="Enter your full Name" aria-label="Username"></input>
</div>
<div class="container-sm ms-0">Email address</div>
<div class="input-group mb-3 mt-2">

  <input type="text" class="form-control" placeholder="Enter your email" aria-label="Username"></input>
</div>
<div class="container-sm ms-0">Age</div>
<div class="input-group mb-3 mt-2">

  <input type="text" class="form-control" placeholder="Enter your age" aria-label="Username"></input>
</div>
<div class="container-sm ms-0">Grade</div>
<select class="form-select form-select-sm" aria-label="Small select example">
  <option selected>Select your grade</option>
  <option value="1">A+</option>
  <option value="2">A</option>
  <option value="3">B</option>
</select>
<div class="container-sm ms-0 mt-2">Gender</div>
<div class="form-check">
  <input class="form-check-input ms-1" type="radio" name="radioDefault" id="radioDefault2" checked></input>
  <label class="form-check-label" for="radioDefault2">
   Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input ms-1" type="radio" name="radioDefault" id="radioDefault2" checked></input>
  <label class="form-check-label" for="radioDefault2">
 Female
  </label>
</div>
<div class="form-check">
  <input class="form-check-input ms-1" type="radio" name="radioDefault" id="radioDefault2" checked></input>
  <label class="form-check-label" for="radioDefault2">
 Other
  </label>
</div>
<div class="form-check">
  <input class="form-check-input ms-1 mt-3" type="radio" name="radioDefault" id="radioDefault2" checked></input>
  <label class="form-check-label  mt-2" for="radioDefault2">
I agree to the terms and conditions
  </label>
</div>
<input class="btn btn-primary ms-4 mt-2" type="submit" value="Submit"></input>
    </>

  )
}

export default App
