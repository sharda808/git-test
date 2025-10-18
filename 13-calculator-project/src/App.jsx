import  { useState } from "react"
import './App.css'

import Display from './component/Display'
import NumberPad from './component/NumberPad'
import Button from "./component/Button";

function App() {
const [displayVal,setDisplayVal] = useState(10);

  return (
    <>



  <h1>Project Calculator</h1>
  <Display  textToShow={displayVal}/>
  <NumberPad setDisplayVal/>

    </>
  )
}

export default App
