import { useState } from 'react'

import './App.css'
import Display from './components/Display'
import NumberPad from './components/NumberPad'

function App() {
  const [displayVal, setDisplayVal] = useState('')
// const countState = useState(0);
//    const count = countState[0]; // intialvalue
//    const setCount = countState[1]; // function which we are set
  return (
    <>
   <h1>Learn DSA </h1>
   <Display textToShow={displayVal}/>
   <NumberPad displayVal={displayVal} setDisplayVal = {setDisplayVal} />
  
    </>
  )
}

export default App
